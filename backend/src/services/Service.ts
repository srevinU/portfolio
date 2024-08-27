import { HttpException, HttpStatus } from '@nestjs/common';

export default abstract class Service {
  public name: string;

  constructor(name: string) {
    this.name = name.toUpperCase();
  }

  public catcher<T>(data: T) {
    if (data === null) this.logDataNotFound();
    if (data instanceof Error) {
      this.logDataError(data);
      this.handleException(data);
    }
    return data;
  }

  private getErrorMessage(error: Error) {
    const errorMessage = `
      Timestamp: ${new Date().toISOString()}
      Context: ${this.name}
      Error Message: ${error.message}
      Stack Trace: ${error.stack}
      `;
    return errorMessage;
  }

  private getInfoMessage(message: string) {
    const infoMessage = `
      Timestamp: ${new Date().toISOString()}
      Context: ${this.name}
      Message: ${message}
      `;
    return infoMessage;
  }

  private logDataNotFound() {
    console.info(this.getInfoMessage('Data not found'));
  }

  private logDataError(error: Error) {
    console.error(this.getErrorMessage(error));
  }

  private handleException(error: Error) {
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
