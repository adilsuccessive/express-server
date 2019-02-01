import UserRepository from "../repositories/user/UserRepository";

export default function seedData() {
  const user = new UserRepository();
  user.count().then(res => {
    if (res === 0) {
      user.createUser({
        name: "HEAD-TRAINEE",
        role: "Head-Trainee",
        email: "head.trainee@successive.tech"
      });
      user.createUser({
        name: "TRAINEE",
        role: "trainee",
        email: "trainee@successive.tech"
      });
    }
  });
}
