import WebService from "./WebService";

export default class AdminConfig extends WebService {
  static async get(_id: string) {
    return this.axiosInstance
      .get(`${process.env.REACT_APP_BACKEND_SUB_NAME}/adminConfig/${_id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }

  static async update(data: any) {
    return this.axiosInstance
      .patch(`${process.env.REACT_APP_BACKEND_SUB_NAME}/adminConfig`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }
}
