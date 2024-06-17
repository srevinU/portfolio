type UserPayload = {
  name: string;
  email: string;
  password: string;
  roles: Array<string>;
};

export default {
  name: 'test_user_creation',
  email: 'test_user_creation@test.com',
  password: 'testUserCreation',
  roles: ['666ff831fcc5be97349a4e3f'],
} as UserPayload;
