import { useState } from "react";
import useButtonConfigHooks from "./buttonConfig";
import { useHomeConfigHooks } from "./homeConfig";
import { useProjectHooks, useProjectsConfigHooks } from "./projectConfig";
import { AdminFormHooksI } from "../../utils/interfaces/hooks";
import useAboutConfigHooks from "./aboutConfig";
import {
  useExperienceHooks,
  useExperiencesConfigHooks,
} from "./experienceConfig";
import adminForm from "../../utils/data/adminForm";

const useAdminHooks = (): AdminFormHooksI => {
  // const [adminFormContent, setAdminFormContent] = useState(new AdminForm());
  const [adminFormContent, setAdminFormContent] = useState(adminForm);
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
