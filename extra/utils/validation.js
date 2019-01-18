const users = [
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
function validateEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
  return regex.test(email);
}
function validateUsers(users) {
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
validateUsers(users);
