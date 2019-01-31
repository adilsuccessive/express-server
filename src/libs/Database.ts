import * as mongoose from "mongoose";
class Database {
  static open(mongoUrl) {
      return new  Promise((resolve, reject) => {
          mongoose.connect(mongoUrl, { useNewUrlParser: true } ).then( ()=> {
            console.log("successfully connected ")
            //define a schema
            const personSchema = new mongoose.Schema({
              name: {
                first: String,
                last: String
              }
            });
            const Person = mongoose.model('Person', personSchema);
            const per = new Person({
              name: { first: 'Mohd', last: 'Adil' }
            });
            console.log(per)
            resolve();
          })
          .catch((err)=>{
            reject(err);
          })
      })
  }
  static disconnect() {
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}
export default Database;
