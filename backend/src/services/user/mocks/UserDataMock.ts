import { Types } from 'mongoose';

type userMockData = {
  _id?: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  roles: Array<Types.ObjectId>;
};

export const userMockData: userMockData = {
  _id: new Types.ObjectId(),
  name: 'name_test',
  email: 'email_test@test.com',
  password: 'password_test',
  roles: [new Types.ObjectId()._id],
};
