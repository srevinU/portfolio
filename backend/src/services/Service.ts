import { HttpException, HttpStatus } from '@nestjs/common';

export default abstract class Service {
  public catcher<T>(data: T) {
    if (data instanceof Error)
      throw new HttpException(data, HttpStatus.INTERNAL_SERVER_ERROR);
    if (data === null)
      throw new HttpException({ message: 'Not found' }, HttpStatus.NOT_FOUND);
    return data;
  }
}
