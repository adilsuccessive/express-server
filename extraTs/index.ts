import { diamond, equilateral } from "./patterns";
import { validateUser, hasPermission } from "./utils";
import { IUsers } from "./interface";

const users: IUsers[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@gmail.com",
    reviewerEmail: "reviewer1@gmail.com"
  },
  {
    traineeEmail: "trainee2@xyz.tech",
    reviewerEmail: "reviewer2@xyz.tech"
  }
];
diamond(5);
equilateral(4);
validateUser(users);
hasPermission("getUsers", "trainee", "read");
hasPermission("get", "trainee", "read");
hasPermission("getUsers", "trainee", "all");
hasPermission("getUsers", "head-trainer", "write");
hasPermission("writeUser", "trainee", "read");
hasPermission("getUsers", "head-trainer", "all");
hasPermission("getUsers", "trainer", "write");
