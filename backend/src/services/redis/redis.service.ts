import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import Service from '../Service';

@Injectable()
export class RedisService extends Service {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    super('Redis');
  }

  public async add(emailKey: string, values: string): Promise<void> {
    return this.cacheManager
      .set(emailKey, values, 2000 /* 2 seconds */)
      .then((result) => this.catcher(result));
  }

  public async delete(emailKey: string): Promise<void> {
    return this.cacheManager
      .del(emailKey)
      .then((result) => this.catcher(result));
  }

  public async get(emailKey: string): Promise<string> {
    return this.cacheManager
      .get(emailKey)
      .then((result: string) => this.catcher(result));
  }
}
