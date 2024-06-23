import { Test } from '@nestjs/testing';
import { RedisService } from './redis.service';
import { CacheModule } from '@nestjs/cache-manager';

describe('RoleService', () => {
  let redisService: RedisService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RedisService],
      imports: [CacheModule.register({ ttl: 2000 })],
    }).compile();
    redisService = module.get<RedisService>(RedisService);
  });

  it('should be defined', () => {
    expect(redisService).toBeDefined();
  });
});
