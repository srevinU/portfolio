import { useEffect, useState } from "react";
import useButtonConfigHooks from "./buttonConfig";
import { useHomeConfigHooks } from "./homeConfig";
import { useProjectHooks, useProjectsConfigHooks } from "./projectConfig";
import { AdminFormHooksI } from "../../utils/interfaces/hooks";
import useAboutConfigHooks from "./aboutConfig";
import AdminConfig from "../../webServices/AdminConfig";
import { AdminForm } from "../../utils/entities/AdminForm";

const useAdminHooks = (): AdminFormHooksI => {
  const [adminFormContent, setAdminFormContent] = useState(new AdminForm());

  const getAdminData = () =>
    AdminConfig.get("67051d3d82644f75c1dfaf12")
      .then((data) => setAdminFormContent(data))
      .catch((error) => console.error(error));

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
    buttonConfigHooksI: useButtonConfigHooks(adminFormContent),
  };
};
export default useAdminHooks;
