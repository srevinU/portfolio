import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import UserModelMock from './mocks/UserModelMock';

describe('UserController', () => {
  let controller: UserController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
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
      ],
    }).compile();
    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', async () => {
    const userMockDataContoler = UserModelMock.generateMockData();
    userMockDataContoler.email = null;
    const user = await controller.create(userMockDataContoler);
    expect(user).not.toBeNull();
    expect(user.email).toBe(userMockDataContoler.email);
    expect(user.password).toBe(userMockDataContoler.password);
    expect(user._id).not.toBeNull();
    expect(user.createdAt).not.toBeNull();
  });

  it('should return a user', async () => {
    const userMockDataContoler = UserModelMock.generateMockData();
    const user = await controller.findOne(userMockDataContoler.email);
    expect(user).not.toBeNull();
    expect(user.email).toBe(userMockDataContoler.email);
    expect(user.password).toBe(userMockDataContoler.password);
    expect(user._id).not.toBeNull();
    expect(user.createdAt).not.toBeNull();
  });

  it('should delete a user', async () => {
    const userMockDataContoler = UserModelMock.generateMockData();
    const user = await controller.remove(userMockDataContoler.email);
    expect(user).not.toBeNull();
    expect(user._id).not.toBeNull();
  });
});
