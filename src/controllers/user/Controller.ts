import { Request, Response } from 'express';
import UserRepository from '../.././repositories/user/UserRepository';
import { successHandler } from '../../libs/routes';
import { userModel } from './../../repositories/user/UserModel';

const user = new UserRepository(userModel);
class UserController {
  // public get(req: Request, res: Response) {
  //   const  { newId }  = req.body;
  //   const data = await user.findOne({_id: newId})
  //     res.status(200).send(successHandler('User Data', 200, data));
  // }
  public async get(req: Request, res: Response) {
    const  { skip = 0, limit = 10 }  = req.query;
    const role = {role: 'trainee'};
    const data1 = await user.find(skip, limit, role);
    const documents = await user.count();
    const data = [{ documents, data1 }];
    res.status(200).send(successHandler('User Data', 200, data));
  }
  public async post(req: Request, res: Response) {
    const data = await user.createUser(req.body);
    res.status(200).send(successHandler('User Created', 200, data));
  }
  public async put(req: Request, res: Response) {
    const { dataToUpdate, id } = req.body;
    const data = await user.updateUser({ originalId: id, name: dataToUpdate});
    res.status(200).send(successHandler('User Updated', 200, data));
  }
  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const data = await user.delete({_id: id});
    res.status(200).send(successHandler('User Deleted', 200, data));
  }
  public createToken(req: Request, res: Response, next) {
    const { token } = req;
    res.status(200).send(successHandler(`Token Generated: ${token}`, 200, 'OK'));
  }
}
export default new UserController();
