import { HttpException, HttpStatus } from '@nestjs/common';

export default abstract class Service {
  public catcher<T>(data: T) {
    if (data instanceof Error)
      throw new HttpException(data, HttpStatus.INTERNAL_SERVER_ERROR);
    if (!data) console.info('No data found');
    return data;
  }
}
