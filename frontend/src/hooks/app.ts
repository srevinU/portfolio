import { useState, useEffect } from "react";
import { PopInT } from "../utils/types/PopIn";
import axios, { AxiosError, AxiosResponse } from "axios";

interface AppHooksI {
  popIn: PopInT;
  handlePopin: (result: AxiosResponse | AxiosError) => void;
}

const useAppHooks = (): AppHooksI => {
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
  return { popIn, handlePopin };
};

export default useAppHooks;
