import { AdminForm } from "../../entities/AdminForm";

const useButtonConfigHooks = (adminFormContent: AdminForm) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(adminFormContent);
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
