import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';
import { userModel } from './../../repositories/user/UserModel';

const user = new UserRepository(userModel);
class UserController {
  public get(req: Request, res: Response) {
    const  id  = req.body;
    user.findOne({_id: id}).then((data) => {
      res.status(200).send(successHandler('User Data', 200, data));
    });
  }
  public post(req: Request, res: Response) {
    user.createUser(req.query).then((data) => {
      res.status(200).send(successHandler('User Created', 200, data));
    });
  }
  public put(req: Request, res: Response) {
    const { name1, id1 } = req.query;
    user.updateUser({ _id: id1, name: name1}).then((data) => {
      res.status(200).send(successHandler('User Updated', 200, data));
    });
  }
  public delete(req: Request, res: Response) {
    user.delete(req.params).then((data) => {
      res.status(200).send(successHandler('User Deleted', 200, data));
    });
  }
}
export default new UserController();
