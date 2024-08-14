import { Experience } from "../../utils/entities/Experience";
import {
  ExperienceConfigHooksI,
  ExperienceHooksI,
} from "../../utils/interfaces/hooks";
import { AdminForm } from "../../utils/entities/AdminForm";
import { ChangeEvent } from "react";

export const useExperiencesConfigHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): ExperienceConfigHooksI => {
  const handleAddEperience = (): void => {
    setAdminFormContent({
      ...adminFormContent,
      experiences: [...adminFormContent.experiences, new Experience()],
    });
  };

  const handleDeleteExperience = (experienceToDelete: Experience): void => {
    setAdminFormContent({
      ...adminFormContent,
      experiences: adminFormContent.experiences.filter(
        (experience: Experience) => experience.uuid !== experienceToDelete.uuid,
      ),
    });
  };

  return {
    handleAddEperience,
    handleDeleteExperience,
  };
};

export const useExperienceHooks = ({
  adminFormContent,
  setAdminFormContent,
}: {
  adminFormContent: AdminForm;
  setAdminFormContent: React.Dispatch<React.SetStateAction<AdminForm>>;
}): ExperienceHooksI => {
  const handleExperienceValueChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    currentExperience: Experience,
  ): void => {
    adminFormContent.experiences = adminFormContent.experiences.map(
      (experience: Experience) => {
        if (experience.uuid === currentExperience.uuid) {
          experience = {
            ...experience,
            [event.target.name]: event.target.value,
          };
        }
        return experience;
      },
    );
    setAdminFormContent(adminFormContent);
  };
  return {
    handleExperienceValueChange,
  };
};
