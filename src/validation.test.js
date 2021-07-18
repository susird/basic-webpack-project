import { validation } from './validation';

test('should return: [Name is required]', () => {
  const userName = '';
  const password = 'sjkfjsdkf';
  const message = validation(userName, password);
  console.log(message)
  expect(message).toContain('Name is required');
})
