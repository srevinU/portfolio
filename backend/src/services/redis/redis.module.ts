import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { redisStore } from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        max: 10000,
        store: (): any =>
          redisStore({
            socket: {
              host: 'localhost',
              port: 6379,
            },
          }),
      }),
    }),
  ],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
