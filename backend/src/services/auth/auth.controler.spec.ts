import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import AuthModelMock from './mocks/AuthModelMock';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '../redis/redis.service';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { CacheModule } from '@nestjs/cache-manager';
import { response } from 'express';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        RedisService,
        UserService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'JWT_SECRET') return 'test';
              if (key === 'JWT_EXPIRATION_TIME') return '3600';
            }),
          },
        },
        {
          provide: getModelToken(User.name),
          useValue: AuthModelMock,
        },
      ],
      imports: [
        JwtModule.register({ secret: 'test' }),
        CacheModule.register({ ttl: 2000 }),
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return response defined and status 200', async () => {
    const authMockData = AuthModelMock.generateMockData();
    await controller.login(authMockData, response);
    expect(response).toBeDefined();
    expect(response.statusCode).toBe(200);
  });
});
