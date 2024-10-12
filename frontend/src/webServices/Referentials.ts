import WebService from "./WebService";

export default class Referentials extends WebService {
  static async getAllTechnos() {
    return this.axiosInstance
      .get(`${process.env.REACT_APP_BACKEND_SUB_NAME}/referencials/technos`)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }

  static async getAllLanguages() {
    return this.axiosInstance
      .get(`${process.env.REACT_APP_BACKEND_SUB_NAME}/referencials/languages`)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  }
}
