import AdminConfig from '../entities/adminConfig.entity';
import { adminConfigMockData } from './AdminConfigDataMock';

export default class AdminConfigModelMock {
  static data: AdminConfig = adminConfigMockData;

  save = jest.fn().mockResolvedValue(adminConfigMockData);
  static findById = jest.fn().mockResolvedValue(adminConfigMockData);
  static findByIdAndUpdate = jest.fn().mockResolvedValue(adminConfigMockData);
  static findOne = jest.fn().mockResolvedValue(adminConfigMockData);

  // new = jest.fn().mockResolvedValue(this.data);
  // static find = jest.fn().mockResolvedValue(adminConfigMockData);
  // static create = jest.fn().mockResolvedValue(adminConfigMockData);
  // static remove = jest.fn().mockResolvedValueOnce(true);
  // static exists = jest.fn().mockResolvedValue(false);
  // static findByIdAndDelete = jest.fn().mockReturnThis();
  // static exec = jest.fn();
  // static deleteOne = jest.fn().mockResolvedValue(true);
}
