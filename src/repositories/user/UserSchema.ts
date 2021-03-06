import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';

export default class UserSchema extends VersionableSchema {
    constructor(option: any) {
        const userSchema = {
            _id: String,
            email: String,
            name: String,
            role: String,
        };
        super(userSchema, option);
    }
}
