import { IUsers } from "./../interface";
import { validateEmail } from "./helpers";

export default function validateUsers(users: IUsers[]): void {
  const validUser = [];
  const invalidUser = [];
  let validCount: number = 0,
    invalidCount: number = 0;

  users.forEach(function(user, index) {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
      validUser.push(`User ${index + 1}`);
      validCount++;
    } else {
      invalidUser.push(`User ${index + 1}`);
      invalidCount++;
    }
  });
  console.log(`${validCount} valid users are ${validUser}`);
  console.log(`${invalidCount} invalid users are ${invalidUser}`);
}
