import { Types } from 'mongoose';
import { RolePermissions } from '../schemas/role.schema';

type roleMockData = {
  _id: Types.ObjectId;
  name: string;
  description: string;
  permissions: Array<RolePermissions>;
};

export const roleMockData = {
  _id: new Types.ObjectId(),
  name: 'admin',
  description: 'admin',
  permissions: ['create', 'read', 'update', 'delete'],
} as roleMockData;
