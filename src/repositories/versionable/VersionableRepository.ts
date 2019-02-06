import * as mongoose from 'mongoose';

export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }
    public generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public createUser(data: any): Promise<D> {
        const id = this.generateObjectId();
        console.log(id);
        console.log(data);
        return this.model.create({...data, _id: id, originalId: id});
    }
    public delete(data) {
        console.log(data._id);
        return this.findOne(data._id).then((result) => {
            console.log({_id: result._id});
            this.model.updateOne( {_id: result._id}, {$set: {deletedAt: true}}, {upsert: true}, (err) => {
                console.log('error'); } );
        });
      }
      public updateUser(data) {
        return this.findOne(data._id).lean()
        .then( (result) => {
           this.createUser(Object.assign(result, { name: data.name})).then( (result1) => {
            this.model.updateOne( {_id: result1._id}, {originalId: data._id, createdAt: Date.now()}, (err) => {
                console.log('error');
            } );
           });
           this.model.updateOne({_id: result._id},
            {$set: { deletedAt: true}}, {upsert: true}).then((err) => {
           console.log(err);
       });
        });

      }
      public getUser(data) {
        return this.model.findById(data, (err) => {
            if (err) {
                console.log('err');
            }
        });
      }
      public count() {
        return this.model.countDocuments();
      }
      public findOne(query) {
        return this.model.findOne({originalId: query , deletedAt: undefined}, (err) => {
            console.log('user not found');
        });
      }
}
