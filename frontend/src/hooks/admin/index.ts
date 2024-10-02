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
import adminFormContent from "../../utils/data/adminForm";
import AdminConfig from "../../webServices/AdminConfig";
import adminFormContentEmpty from "../../utils/data/adminFormEmpty";

const useAdminHooks = (): AdminFormHooksI => {
  // const [adminFormContent, setAdminFormContent] = useState(new AdminForm());
  const [adminFormContent, setAdminFormContent] = useState(
    adminFormContentEmpty,
  );

  useEffect(() => {
    async function fetchData() {
      const data = await AdminConfig.get(process.env.REACT_APP_C_ID as string);
      console.log(data);
      setAdminFormContent(data);
    }
    fetchData();
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
