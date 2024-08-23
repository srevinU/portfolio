import { adminConfigMockData } from './AdminConfigDataMock';

export default class AdminConfigModelMock {
  static adminConfig = adminConfigMockData;
  constructor(private data) {}

  static generateMockData = () => {
    return adminConfigMockData;
  };

  save = jest.fn().mockResolvedValue(this.data);
  static findOne = (query) => {
    if (query._id === this.adminConfig._id) {
      return this.adminConfig;
    }
    return null;
  };
  static deleteOne = () => ({
    where: jest.fn().mockReturnThis(),
    equals: jest.fn().mockResolvedValue({ _id: this.adminConfig._id }),
  });
}
