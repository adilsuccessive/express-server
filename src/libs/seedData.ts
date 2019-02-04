import UserRepository from "../repositories/user/UserRepository";

export default function seedData() {
  const user = new UserRepository();
  user.createUser({ name: "admin1" });
}
