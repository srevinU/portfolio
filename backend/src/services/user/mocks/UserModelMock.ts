import { User } from '../schemas/user.schema';
import { userMockData } from './UserDataMock';

export default class UserModelMock {
  static user = userMockData;
  constructor(private data) {}

  static generateMockData = () => {
    const user = new User();
    user._id = this.user._id;
    user.email = this.user.email;
    user.password = this.user.password;
    user.roles = this.user.roles;
    return user;
  };

  save = jest.fn().mockResolvedValue(this.data);
  static findOne = (query) => {
    if (query.email) {
      return this.user;
    }
    return null;
  };
  static deleteOne = () => ({
    where: jest.fn().mockReturnThis(),
    equals: jest.fn().mockResolvedValue({ _id: this.user._id }),
  });
}
