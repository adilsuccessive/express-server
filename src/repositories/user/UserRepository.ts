import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel } from './UserModel'
export default class UserRepository {
    private model: mongoose.Model<IUserModel>;
    public static generateObjectId() {
        console.log(mongoose.Types.ObjectId())
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        this.model = userModel;
    }
    public create(data: any): Promise<IUserModel> {
        console.log(data)
        return this.model.create({...data, _id:UserRepository.generateObjectId()})
        
    }
}