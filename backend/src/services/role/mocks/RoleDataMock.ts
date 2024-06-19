import { Types } from 'mongoose';
import { RolePermissions } from '../shemas/role.schema';

type roleMockData = {
  _id: Types.ObjectId;
  name: string;
  description: string;
  permissions: Array<RolePermissions>;
  createdAt: Date;
};

export const roleMockData = {
  _id: new Types.ObjectId(),
  name: 'admin',
  description: 'admin',
  permissions: ['create', 'read', 'update', 'delete'],
  createdAt: new Date(),
} as roleMockData;
