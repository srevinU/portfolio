import { AdminForm } from "../../utils/entities/AdminForm";
import { ButtonConfigHooksI } from "../../utils/interfaces/hooks";
import AdminConfig from "../../webServices/AdminConfig";

const useButtonConfigHooks = (
  adminFormContent: AdminForm,
): ButtonConfigHooksI => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
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
