import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { redisStore } from 'cache-manager-redis-store';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        max: 10000, // maximum number of items in cache
        ttl: 2000, // seconds
        isCacheableValue: () => true, // function to determine if value is cacheable
        store: (): any =>
          redisStore({
            socket: {
              host: configService.get<string>('REDIS_HOST'),
              port: parseInt(configService.get<string>('REDIS_PORT')),
            },
          }),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [RedisService],
  providers: [RedisService],
})
export class RedisModule {}
