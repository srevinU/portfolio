import { response } from 'express';
import { userMockData } from '../../user/mocks/UserDataMock';
import { User } from '../../user/schemas/user.schema';
import * as bcrypt from 'bcrypt';

export default class AuthModelMock {
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

  static compare = jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

  static send = jest
    .spyOn(response, 'send')
    .mockReturnValue(response.status(200));

  static cookie = jest.spyOn(response, 'cookie').mockReturnValue(response);

  static findOne = (query) => {
    if (query.email) {
      return this.user;
    }
    return null;
  };
}
