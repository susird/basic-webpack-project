import { validation } from './validation';

test('should return: [Name is required]', () => {
  const userName = '';
  const password = 'sjkfjsdkf';
  const message = validation(userName, password);
  expect(message).toContain('Name is required');
})

test('should return: [Password cannot be password]', () => {
  const userName = 'fsdfsdfs';
  const password = 'password';
  const message = validation(userName, password);
  expect(message).toContain('Password cannot be password');
})

test('should return: [Password must be longer than 6 characters]', () => {
  const userName = 'fsdfsdfs';
  const password = ([0-6]);
  const message = validation(userName, password);
  expect(message).toContain('Password must be longer than 6 characters');
})

test('should return: [Password must be longer than 6 characters]', () => {
  const userName = 'fsdfsdfs';
  const password = ([20-999]);
  const message = validation(userName, password);
  expect(message).toContain('Password must be longer than 6 characters');
})