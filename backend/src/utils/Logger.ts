export default class Logger {
  nameService: string;
  constructor(nameService: string) {
    this.nameService = nameService;
  }
  private getErrorMessage(error: Error) {
    const errorMessage = `
          Timestamp: ${new Date().toISOString()}
          Context: ${this.nameService}
          Error Message: ${error.message}
          Stack Trace: ${error.stack}
          `;
    return errorMessage;
  }

  private getInfoMessage(message: string) {
    const infoMessage = `
          Timestamp: ${new Date().toISOString()}
          Context: ${this.nameService}
          Message: ${message}
          `;
    return infoMessage;
  }

  public logDataNotFound() {
    console.info(this.getInfoMessage('Data not found'));
  }

  public logDataError(error: Error) {
    console.error(this.getErrorMessage(error));
  }
}
