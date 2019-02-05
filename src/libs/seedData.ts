import UserRepository from '../repositories/user/UserRepository';

export default function seedData() {
  const user = new UserRepository();
  user.count().then((res) => {
    if (res === 0) {
      user.createUser({
        email: 'head.trainee@successive.tech',
        name: 'HEAD-TRAINEE',
        role: 'Head-Trainee',
      });
      user.createUser({
        email: 'trainee@successive.tech',
        name: 'TRAINEE',
        role: 'trainee',
      });
    }
  });
}
