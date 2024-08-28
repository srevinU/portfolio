import { Role } from '../schemas/role.schema';
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
    return role;
  };

  save = jest.fn().mockResolvedValue(this.data);
  static findOne = function () {
    return {
      where: jest.fn().mockReturnThis(),
      equals: jest.fn().mockResolvedValue({ _id: this.role._id }),
    };
  };

  static create = jest.fn().mockResolvedValue({
    populate: jest.fn().mockReturnValue({
      then: jest.fn().mockResolvedValue(this.role),
    }),
  });

  static deleteOne = function () {
    return {
      where: jest.fn().mockReturnThis(),
      equals: jest.fn().mockResolvedValue({ _id: this.role._id }),
    };
  };

  // static findOne = jest.fn().mockResolvedValue(adminConfigMockData);
  // new = jest.fn().mockResolvedValue(this.data);
  // static find = jest.fn().mockResolvedValue(adminConfigMockData);
  // static create = jest.fn().mockResolvedValue(adminConfigMockData);
  // static exists = jest.fn().mockResolvedValue(false);
  // static findByIdAndDelete = jest.fn().mockReturnThis();
  // static deleteOne = jest.fn().mockResolvedValue(true);
}
