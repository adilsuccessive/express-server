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
        return this.model.create({...data, _id: id, originalId: id});
    }
    public delete(data) {
        console.log(data._id);
        return this.findOne({originalId: data._id, deletedAt: undefined}).then((result) => {
            this.model.updateOne( {_id: result._id}, {$set: {deletedAt: true}}, {upsert: true}, (err) => {
                console.log('error'); } );
        });
      }
      public updateUser(data) {
        return  this.findOne({originalId: data.originalId, deletedAt: undefined}).lean()
        .then( (result) => {
           this.createUser(Object.assign(result,  data.name)).then( (result1) => {
            this.model.updateOne( {_id: result1._id}, {originalId: data.originalId, createdAt: Date.now()}, (err) => {
                if (err) {
                console.log(err);
                }
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
        return this.model.findOne(query);
      }
}
