import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { RedisService } from '../redis/redis.service';
import { UserService } from '../user/user.service';
import { CacheModule } from '@nestjs/cache-manager';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import AuthModelMock from './mocks/AuthModelMock';
import { response } from 'express';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        RedisService,
        UserService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'JWT_SECRET') return 'test';
              if (key === 'JWT_EXPIRATION_TIME') return '3600s';
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
    module.init();
    authService = await module.resolve<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should return response defined', async () => {
    const authMockData = AuthModelMock.generateMockData();
    await authService.login(authMockData, response);
    expect(response).toBeDefined();
  });
});
