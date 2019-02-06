import * as bcrypt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
import { userModel } from './../repositories/user/UserModel';

export default function seedData() {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log(process.env.PASSWORD);
  const pass = bcrypt.hashSync(process.env.PASSWORD, salt);

  const user = new UserRepository(userModel);
  user.countData().then((res) => {
    if (res === 0) {
      user.createUsers({
        email: 'head.trainee@successive.tech',
        name: 'HEAD-TRAINEE',
        password: pass,
        role: 'Head-Trainee',
      });
      user.createUsers({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        password: pass,
        role: 'trainee',
      });
    }
  });
}
