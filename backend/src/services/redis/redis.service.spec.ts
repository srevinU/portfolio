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

  it('should set a value', async () => {
    await redisService.add('test', 'test');
    const value = await redisService.get('test');
    expect(value).toBe('test');
  });

  it('should get a value', async () => {
    await redisService.add('test', 'test');
    const value = await redisService.get('test');
    expect(value).toBe('test');
  });

  it('should throw an error on add', async () => {
    try {
      await redisService.add('test', 'test');
    } catch (error) {
      expect(error.message).toBe('Error: Key already exists');
    }
  });

  it('should delete a value', async () => {
    await redisService.add('test', 'test');
    await redisService.delete('test');
    const value = await redisService.get('test');
    expect(value).toBeUndefined();
  });

  it('should throw an error on delete', async () => {
    try {
      await redisService.delete('test');
    } catch (error) {
      expect(error.message).toBe('Error: Key does not exist');
    }
  });

  it('should throw an error on get', async () => {
    try {
      await redisService.get('test');
    } catch (error) {
      expect(error.message).toBe('Error: Key does not exist');
    }
  });
});
