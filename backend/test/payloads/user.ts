import { Types } from 'mongoose';

type UserPayload = {
  name: string;
  email: string;
  password: string;
  roles: Array<Types.ObjectId>;
};

export const userTest: UserPayload = {
  name: 'test_user_creation',
  email: 'test_user_creation@test.com',
  password: 'testUserCreation',
  roles: [new Types.ObjectId('666ff831fcc5be97349a4e3f')],
};

export const userAdmin: UserPayload = {
  name: 'adminTest',
  email: 'admintest@test.com',
  password: '$2b$10$WHtveGcbclKPWYoXcObyk.k9AshvR/z9VSZ31.G6wBcVXEAJaY/Nm', // adminTest
  roles: [],
};
