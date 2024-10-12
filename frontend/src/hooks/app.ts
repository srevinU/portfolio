import { useState, useEffect } from "react";
import { PopInT } from "../utils/types/PopIn";
import axios, { AxiosError, AxiosResponse } from "axios";
import AdminConfig from "../webServices/AdminConfig";
import { AdminForm } from "../utils/entities/AdminForm";

interface AppHooksI {
  popIn: PopInT;
  handlePopin: (result: AxiosResponse | AxiosError) => void;
  appData: AdminForm;
}

export const useAppHooks = (): AppHooksI => {
  const [appData, setAppData] = useState<AdminForm>(new AdminForm());

  const getAppData = async () => {
    try {
      const data = await AdminConfig.get(
        process.env.REACT_APP_ADMIN_CONFIG_ID as string,
      );
      setAppData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAppData();
  }, []);

  const [popIn, setPopIn] = useState<PopInT>({
    active: false,
    message: "",
    statusCode: 200,
  });

  useEffect(() => {
    let timeOutId: NodeJS.Timeout | null = null;
    if (popIn.active) {
      timeOutId = setTimeout((): void => {
        setPopIn({
          active: false,
          message: "",
          statusCode: 200,
        });
      }, 5000);
      return (): void => {
        if (timeOutId) return clearTimeout(timeOutId);
      };
    }
  }, [popIn]);

  const handlePopin = (result: AxiosResponse | AxiosError): void => {
    if (!axios.isAxiosError(result)) {
      setPopIn({
        active: true,
        message: result.data.message,
        statusCode: result.status,
      });
    } else {
      setPopIn({
        active: true,
        message: (result.response as any)?.data.message,
        statusCode: 500,
      });
    }
  };
  return { popIn, handlePopin, appData };
};

export default useAppHooks;
