// A function to validate an email using a regular expression
export function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

// A function to check the validity of a phone number using a regular expression
export function isValidPhoneNumber(phone: string) {
  const phoneRegex = /^\+380\d{9}$/;
  return phoneRegex.test(phone);
}
