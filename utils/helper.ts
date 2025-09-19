// Validating Email Format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Password minimum length of 8 characters.
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};