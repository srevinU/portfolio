import { ProjectT } from "../../utils/types/SliderProjects";
import { Experience } from "../../entities/Experience";
import {
  ExperienceConfigHooksI,
  ExperienceHooksI,
} from "../../utils/interfaces/hooks";

export const useExperienceConfigHooks = (
  experiences: Array<Experience>,
  setExperiences: Function,
): ExperienceConfigHooksI => {
  const handleAddEperience = (): void => {
    setExperiences([...experiences, new Experience()]);
    console.log(experiences);
  };

  const handleDeleteExperience = (experienceToDelete: ProjectT): void => {
    setExperiences(
      experiences.filter(
        (experience) => experience.uuid !== experienceToDelete.uuid,
      ),
    );
  };

  return {
    handleAddEperience,
    handleDeleteExperience,
  };
};

export const useExperienceHooks = ({
  workExperience,
}: {
  workExperience: Experience;
}): ExperienceHooksI => {
  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    workExperience[e.target.name] = e.target.value;
  };

  return {
    handleValueChange,
  };
};
