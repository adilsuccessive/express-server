import UserRepository from "../repositories/user/UserRepository";

export default function seedData() {
  const user = new UserRepository();
  user.createUser({ _id: "1", name: "admin1" });
}
