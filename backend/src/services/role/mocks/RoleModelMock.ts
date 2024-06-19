import { Role } from '../shemas/role.schema';
import { roleMockData } from './RoleDataMock';

export default class RoleModelMock {
  static role = roleMockData;
  constructor(private data) {}

  static generateMockData = () => {
    const role = new Role();
    role._id = this.role._id;
    role.name = this.role.name;
    role.description = this.role.description;
    role.permissions = this.role.permissions;
    role.createdAt = this.role.createdAt;
    return role;
  };

  save = jest.fn().mockResolvedValue(this.data);
  static findOne = function () {
    return {
      where: jest.fn().mockReturnThis(),
      equals: jest.fn().mockResolvedValue({ _id: this.role._id }),
    };
  };
  static deleteOne = function () {
    return {
      where: jest.fn().mockReturnThis(),
      equals: jest.fn().mockResolvedValue({ _id: this.role._id }),
    };
  };
}
