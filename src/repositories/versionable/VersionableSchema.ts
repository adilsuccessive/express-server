import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
    constructor(option: any, collections: any) {
        const versionSchema = Object.assign({
            createdAt: {
                default: Date.now,
                required: true,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Boolean,
            },
            originalId: {
                required: true,
                type: String,
            },
            password: {
                required: false,
                type: String,
            },
        }, option);
        super(versionSchema, collections);
    }
}
