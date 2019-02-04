import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
export default class UserRepository {
  public static generateObjectId() {
    console.log(mongoose.Types.ObjectId());
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;
  constructor() {
    this.model = userModel;
  }
  public createUser(data: any): Promise<IUserModel> {
    console.log(data);
    return this.model.create({
      ...data,
      _id: UserRepository.generateObjectId(),
    });
  }
  public delete(data) {
    return this.model.deleteMany(data, (err) => {
        if (err) {
            console.log('Error');
        }
    });
  }
  public updateUser(oldData, newData) {
    return this.model.updateOne(
      { name: oldData },
      { name: newData },
      (err) => {
          if (err) {
              console.log('Error');
          }
      },
    );
  }
  public getUser(data) {
    return this.model.findById(data, (err) => {
        if (err) {
            console.log('err');
        }
    });
  }
  public count() {
    return this.model.count({});
  }
  public findOne(query) {
    return this.model.findOne(query);
  }
}
