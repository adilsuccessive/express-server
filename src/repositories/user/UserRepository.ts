import * as mongoose from 'mongoose';
import VersionRepository from '../versionable/VersionableRepository';
import IUserModel from './IUserModel';

export default class UserRepository extends VersionRepository <IUserModel, mongoose.Model<IUserModel>> {
  public createUsers(data: any) {
    return this.createUser(data);
  }
  public updateData(data) {
      return super.updateUser(data);
  }
  public deleteData(data) {
      return super.delete(data);
  }
  public findData(data) {
      return this.findOne(data);
  }
  public countData() {
      return super.count();
  }
}
