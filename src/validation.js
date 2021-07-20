export function validation (userName, password) {
  const messages = [];
  if (userName && password) {
    messages.push('Successful login');
  }
  if (userName === '' || userName == null) {
    messages.push('Name is required');
  }
  if (password.length  <= 6) {
    messages.push('Password must be longer than 6 characters');
  }
  if (password.length  > 20) {
    messages.push('Password must be less than 20 characters');
  }
  if (password === 'password') {
    messages.push('Password cannot be password');
  }
  return messages;

}
