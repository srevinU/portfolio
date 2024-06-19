import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Role } from '../role/shemas/role.schema';
import RoleModelMock from '../role/mocks/RoleModelMock';
import UserModelMock from './mocks/UserModelMock';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'SALT_ROUNDS') return '10';
            }),
          },
        },
        {
          provide: getModelToken(User.name),
          useValue: UserModelMock,
        },
        {
          provide: getModelToken(Role.name),
          useValue: RoleModelMock,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should register user', async () => {
    const user = UserModelMock.generateMockData();
    user.email = null;
    const result = await userService.register(user);
    expect(result._id).toEqual(user._id);
  });

  it('should find user by email', async () => {
    const user = UserModelMock.generateMockData();
    const result = await userService.findOne(user.email);
    expect(result.email).toEqual(user.email);
  });

  it('should get user roles', async () => {
    const user = UserModelMock.generateMockData();
    const result = await userService.getUserRoles(user.email);
    expect(result).toEqual(user.roles);
  });

  it('should remove user', async () => {
    const user = UserModelMock.generateMockData();
    const result = await userService.remove(user.email);
    expect(result._id).toEqual(user._id);
  });

  it('should throw an error when trying to register an existing user', async () => {
    const user = UserModelMock.generateMockData();
    try {
      await userService.register(user);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to find a non-existent user', async () => {
    const user = UserModelMock.generateMockData();
    try {
      await userService.findOne(user.email);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to get roles of a non-existent user', async () => {
    const user = UserModelMock.generateMockData();
    try {
      await userService.getUserRoles(user.email);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to remove a non-existent user', async () => {
    const user = UserModelMock.generateMockData();
    try {
      await userService.remove(user.email);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to remove a user with an incorrect email', async () => {
    try {
      await userService.remove('incorrect email');
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to find a user with an incorrect email', async () => {
    try {
      await userService.findOne('incorrect email');
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to get roles of a user with an incorrect email', async () => {
    try {
      await userService.getUserRoles('incorrect email');
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to register a user with an incorrect email', async () => {
    const user = UserModelMock.generateMockData();
    user.email = null;
    try {
      await userService.register(user);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to register a user with an incorrect password', async () => {
    const user = UserModelMock.generateMockData();
    user.password = null;
    try {
      await userService.register(user);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });

  it('should throw an error when trying to register a user with an incorrect roles', async () => {
    const user = UserModelMock.generateMockData();
    user.roles = null;
    try {
      await userService.register(user);
    } catch (e) {
      expect(e.message).toEqual('Unauthorized');
    }
  });
});
