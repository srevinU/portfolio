import "../../style/components/admin/AdminForm.css";
import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./project/ProjectsConfig";
import ButtonsConfig from "./ButtonsConfig";
import useAdminHooks from "../../hooks/admin";
import AboutConfig from "./about/AboutConfig";

export default function AdminFrom(): JSX.Element {
  const {
    adminFormContent,
    homeConfigHooksI: { handleHomeDataChange },
    projectHooksI: {
      handleProjectDataChangeWithLanguage,
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
        handleProjectDataChangeWithLanguage={
          handleProjectDataChangeWithLanguage
        }
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
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
    </div>
  );
}
