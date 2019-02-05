import * as mongoose from 'mongoose';
import VersionRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';

export default class UserRepository extends VersionRepository <IUserModel, mongoose.Model<IUserModel>> {
  public createUsers(data: any) {
    return super.createUser(data);
  }
  public updateData(olddata, newdata) {
      return super.updateUser(olddata, newdata);
  }
  public deleteData(data) {
      return super.delete(data);
  }
  public findData(data) {
      return super.findOne(data);
  }
  public countData() {
      return super.count();
  }
}
