// Функція для перевірки валідності електронної пошти за допомогою регулярного виразу
export function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}

// Функція для перевірки валідності номеру телефону за допомогою регулярного виразу
export function isValidPhoneNumber(phone: string) {
  const phoneRegex = /^\+380\d{9}$/;
  return phoneRegex.test(phone);
}
