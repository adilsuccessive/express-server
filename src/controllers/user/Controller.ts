import { Request, Response, NextFunction } from "express";
import { successHandler } from "../../libs/routes";
import UserRepository from "../.././repositories/user/UserRepository";

class UserController {
  get(req: Request, res: Response) {
    const { _id } = req.query;
    const user = new UserRepository();
    user.getUser(_id).then(data => {
      res.status(200).send(successHandler("User Data", 200, data));
    });
  }
  post(req: Request, res: Response) {
    const user = new UserRepository();
    user.createUser(req.query).then(data => {
      res.status(200).send(successHandler("User Created", 200, data));
    });
  }
  put(req: Request, res: Response) {
    const { oldName, newName } = req.query;
    const user = new UserRepository();
    user.updateUser(oldName, newName).then(data => {
      res.status(200).send(successHandler("USer Updated", 200, data));
    });
  }
  delete(req: Request, res: Response) {
    const user = new UserRepository();
    const { id } = req.params;
    user.delete({ _id : id }).then(data => {
      res.status(200).send(successHandler("User Deleted", 200, data));
    });
  }
}
export default new UserController();
