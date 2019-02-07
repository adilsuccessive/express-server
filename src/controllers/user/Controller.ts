import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';
import { userModel } from './../../repositories/user/UserModel';

const user = new UserRepository(userModel);
class UserController {
  public get(req: Request, res: Response) {
    const  id  = req.query;
    user.findOne({_id: id}).then((data) => {
      res.status(200).send(successHandler('User Data', 200, data));
    });
  }
  public post(req: Request, res: Response) {
    user.createUser(req.body).then((data) => {
      res.status(200).send(successHandler('User Created', 200, data));
    });
  }
  public put(req: Request, res: Response) {
    const { dataToUpdate, id } = req.body;
    user.updateUser({ originalId: id, name: dataToUpdate}).then((data) => {
      res.status(200).send(successHandler('User Updated', 200, data));
    });
  }
  public delete(req: Request, res: Response) {
    const { id } = req.params;
    user.delete({_id: id}).then((data) => {
      res.status(200).send(successHandler('User Deleted', 200, data));
    });
  }
  public createToken(req: Request, res: Response, next) {
    const { token } = req;
    console.log('token---------------------->', token);
    res.status(200).send(successHandler(`Token Generated: ${token}`, 200, 'OK'));
  }
}
export default new UserController();
