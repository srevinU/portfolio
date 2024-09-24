import "../../style/components/admin/AdminForm.css";
import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./project/ProjectsConfig";
import ButtonsConfig from "./ButtonsConfig";
import useAdminHooks from "../../hooks/admin";
import AboutConfig from "./about/AboutConfig";
import ExperienceConfig from "./ExperienceConfig";

export default function AdminFrom(): JSX.Element {
  const {
    adminFormContent,
    homeConfigHooksI: { handleHomeDataChange },
    projectHooksI: {
      handleProjectDataChange,
      handleProjectStatusChange,
      handleProjectTechnoClicked,
    },
    projectsConfigHooksI: { handleAddProject, handleDeleteProject },
    aboutConfigHooksI: {
      handleAboutDataOnChange,
      handleAboutTechnoClicked,
      handleAboutDevLanguageClicked,
      handleDisciplinesSelected,
    },
    experienceHooksI: { handleExperienceValueChange },
    experiencesConfigHooksI: { handleAddEperience, handleDeleteExperience },
    buttonConfigHooksI: { handleSubmit, handleReset },
  } = useAdminHooks();

  return (
    <div className="admin_form">
      <HomeConfig
        homeContent={adminFormContent.home}
        handleHomeDataChange={handleHomeDataChange}
      />
      <ProjectsConfig
        projects={adminFormContent.projects}
        handleAddProject={handleAddProject}
        handleDeleteProject={handleDeleteProject}
        handleProjectDataChange={handleProjectDataChange}
        handleProjectStatusChange={handleProjectStatusChange}
        handleProjectTechnoClicked={handleProjectTechnoClicked}
      />
      <AboutConfig
        aboutContent={adminFormContent.about}
        handleAboutDataOnChange={handleAboutDataOnChange}
        handleAboutTechnoClicked={handleAboutTechnoClicked}
        handleAboutDevLanguageClicked={handleAboutDevLanguageClicked}
        handleDisciplinesSelected={handleDisciplinesSelected}
      />
      <ExperienceConfig
        experiences={adminFormContent.experiences}
        handleAddEperience={handleAddEperience}
        handleDeleteExperience={handleDeleteExperience}
        handleExperienceValueChange={handleExperienceValueChange}
      />
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
    </div>
  );
}
