import { validateEmail } from "./helpers";

export default function validateUsers(users) {
  const validUser = [];
  const invalidUser = [];
  let validCount = 0,
    invalidCount = 0;

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
