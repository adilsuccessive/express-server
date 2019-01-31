import * as mongoose from 'mongoose'

export default class UserSchema extends mongoose.Schema {
    constructor(option: any) {
        const userSchema = {
            _id: String,
            name: String
        }
        super(userSchema, option)
    }
}