import { Types } from 'mongoose';

type userMockData = {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  roles: Array<Types.ObjectId>;
  createdAt: Date;
};

export const userMockData = {
  _id: new Types.ObjectId(),
  name: 'admin',
  email: 'admin@admin.com',
  password: 'admin',
  roles: [new Types.ObjectId()._id],
  createdAt: new Date(),
} as userMockData;
