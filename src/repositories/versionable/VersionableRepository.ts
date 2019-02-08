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
    public async delete(data): Promise<D> {
        const result = await this.findOne({originalId: data._id, deletedAt: undefined});
        this.model.updateOne( {_id: result._id}, {$set: {deletedAt: true}}, {upsert: true}, (updated) => {
                console.log(updated); } );
        return (result);
      }
      public async updateUser(data): Promise<D> {
        const result = await this.findOne({originalId: data.originalId, deletedAt: undefined}).lean();
        const result1 = await this.createUser(Object.assign(result,  data.name));
        this.model.updateOne( {_id: result1._id}, {originalId: data.originalId, createdAt: Date.now()}, (err) => {
            if (err) {
               console.log(err);
                }
            } );
        this.model.updateOne({_id: result._id},
            {$set: { deletedAt: true}}, {upsert: true}).then((err) => {
           console.log(err);
       });
        return (result);
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
      public findUser(value1, value2, role) {
          return this.model.find(role, undefined, { skip: +(value1), limit: +(value2)}, (err) => {
              console.log('error');
          });
      }
}
