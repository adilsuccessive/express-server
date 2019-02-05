import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';

class UserController {
  public get(req: Request, res: Response) {
    const user = new UserRepository();
    const  id  = req.body;
    user.findOne({_id: id}).then((data) => {
      res.status(200).send(successHandler('User Data', 200, data));
    });
  }
  public post(req: Request, res: Response) {
    const user = new UserRepository();
    user.createUser(req.query).then((data) => {
      res.status(200).send(successHandler('User Created', 200, data));
    });
  }
  public put(req: Request, res: Response) {
    const { oldName, newName } = req.query;
    const user = new UserRepository();
    user.updateUser(oldName, newName).then((data) => {
      res.status(200).send(successHandler('USer Updated', 200, data));
    });
  }
  public delete(req: Request, res: Response) {
    const user = new UserRepository();
    user.delete(req.params).then((data) => {
      res.status(200).send(successHandler('User Deleted', 200, data));
    });
  }
}
export default new UserController();
