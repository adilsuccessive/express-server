import * as mongoose from 'mongoose';

export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private model: M;
    constructor(model) {
        this.model = model;
    }
    public generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    public createUser(data): Promise<D> {
        const id = this.generateObjectId();
        console.log(id);
        return this.model.create({...data, _id: id, originalId: id});
    }
    public delete(data) {
        return this.model.deleteMany(data, (err) => {
            if (err) {
                console.log('Error');
            }
        });
      }
      public updateUser(data, originalId) {
        const user = this.findOne(originalId).then( (result) => {
            console.log(user);
            console.log(result)
            this.createUser(result);
        });

        return this.model.updateOne(
          {  },
          {  },
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
        return this.model.countDocuments();
      }
      public findOne(query) {
        return this.model.findOne(query);
      }
}
