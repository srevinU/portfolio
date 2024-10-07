import { useEffect, useState } from "react";
import useButtonConfigHooks from "./buttonConfig";
import { useHomeConfigHooks } from "./homeConfig";
import { useProjectHooks, useProjectsConfigHooks } from "./projectConfig";
import { AdminFormHooksI } from "../../utils/interfaces/hooks";
import useAboutConfigHooks from "./aboutConfig";
import {
  useExperienceHooks,
  useExperiencesConfigHooks,
} from "./experienceConfig";
import AdminConfig from "../../webServices/AdminConfig";
import adminFormContentEmpty from "../../utils/data/adminFormEmpty";

const useAdminHooks = (): AdminFormHooksI => {
  const [adminFormContent, setAdminFormContent] = useState(
    adminFormContentEmpty,
  );

  const getAdminData = async () => {
    try {
      const data = await AdminConfig.get(process.env.REACT_APP_C_ID as string);
      setAdminFormContent(data);
      console.log("dataAdmimn", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdminData();
  }, []);

  return {
    adminFormContent,
    homeConfigHooksI: useHomeConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    projectHooksI: useProjectHooks({ adminFormContent, setAdminFormContent }),
    projectsConfigHooksI: useProjectsConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    aboutConfigHooksI: useAboutConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    experienceHooksI: useExperienceHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    experiencesConfigHooksI: useExperiencesConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    buttonConfigHooksI: useButtonConfigHooks(adminFormContent),
  };
};
export default useAdminHooks;
