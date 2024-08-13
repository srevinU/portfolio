import { useState } from "react";
import useButtonConfigHooks from "./buttonConfig";
import { useHomeConfigHooks } from "./homeConfig";
import { useProjectHooks, useProjectsConfigHooks } from "./projectConfig";
import { AdminForm } from "../../entities/AdminForm";
import { AdminFormHooksI } from "../../utils/interfaces/hooks";
import useAboutConfigHooks from "./aboutConfig";

const useAdminHooks = (): AdminFormHooksI => {
  const [adminFormContent, setAdminFormContent] = useState(new AdminForm());
  return {
    adminFormContent,
    HomeConfigHooksI: useHomeConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    ProjectHooksI: useProjectHooks({ adminFormContent, setAdminFormContent }),
    ProjectsConfigHooksI: useProjectsConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    AboutConfigHooksI: useAboutConfigHooks({
      adminFormContent,
      setAdminFormContent,
    }),
    ButtonConfigHooksI: useButtonConfigHooks(adminFormContent),
  };
};
export default useAdminHooks;
