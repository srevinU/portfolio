import WebService from "./WebService";

export default class Referentials extends WebService {
  static async getAllTechnos() {
    return this.axiosInstance
      .get(`${process.env.REACT_APP_BACKEND_SUB_NAME}/referencials/technos`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }

  static async getAllLanguages() {
    return this.axiosInstance
      .get(`${process.env.REACT_APP_BACKEND_SUB_NAME}/referencials/languages`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        return error;
      });
  }
}
