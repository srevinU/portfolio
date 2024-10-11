import { HttpException, HttpStatus } from '@nestjs/common';

export default class Handler {
  public handleException(error: Error) {
    let httpStatus: number = HttpStatus.INTERNAL_SERVER_ERROR;
    if (error.message.includes('duplicate key error')) {
      httpStatus = HttpStatus.CONFLICT;
    }
    if (
      error.message.includes('validation failed') ||
      error.message.includes('Internal Server Error')
    ) {
      httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    }
    if (
      error.message.includes('Cast to ObjectId failed') ||
      error.message.includes('Not Found')
    ) {
      httpStatus = HttpStatus.NOT_FOUND;
    }
    if (error.message.includes('Unauthorized')) {
      console.info('In Unauthorized handler');
      httpStatus = HttpStatus.UNAUTHORIZED;
    }
    if (error.message.includes('Forbidden')) {
      httpStatus = HttpStatus.FORBIDDEN;
    }
    if (error.message.includes('Bad Request')) {
      httpStatus = HttpStatus.BAD_REQUEST;
    }
    if (error.message.includes('Service Unavailable')) {
      httpStatus = HttpStatus.SERVICE_UNAVAILABLE;
    }
    if (error.message.includes('Gateway Timeout')) {
      httpStatus = HttpStatus.GATEWAY_TIMEOUT;
    }
    throw new HttpException(error, httpStatus);
  }
}
