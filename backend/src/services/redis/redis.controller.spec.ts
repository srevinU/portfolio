import { Test } from '@nestjs/testing';
import { RedisService } from './redis.service';

describe('RedisController', () => {
  beforeEach(async () => {
    await Test.createTestingModule({
      providers: [RedisService],
    }).compile();
  });

  it('should be defined', () => {});
});
