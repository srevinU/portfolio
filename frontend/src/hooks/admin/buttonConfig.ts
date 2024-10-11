import { AdminForm } from "../../utils/entities/AdminForm";
import { ButtonConfigHooksI } from "../../utils/interfaces/hooks";
import AdminConfig from "../../webServices/AdminConfig";

const useButtonConfigHooks = (
  adminFormContent: AdminForm,
): ButtonConfigHooksI => {
  const format = (datas: Array<any>): Array<any> => {
    return datas.map((data) => data._id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    adminFormContent.about.technos = format(adminFormContent.about.technos);
    adminFormContent.about.languages = format(adminFormContent.about.languages);
    adminFormContent.projects.forEach((project) => {
      project.technos = format(project.technos);
    });
    AdminConfig.update(adminFormContent);
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Reset");
  };
  return {
    handleSubmit,
    handleReset,
  };
};

export default useButtonConfigHooks;
