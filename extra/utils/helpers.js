export function validateEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
  return regex.test(email);
}
