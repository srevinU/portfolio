import "../../style/components/admin/AdminForm.css";
import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./project/ProjectsConfig";
import ButtonsConfig from "./ButtonsConfig";
import useAdminHooks from "../../hooks/admin";
import AboutConfig from "./about/AboutConfig";

export default function AdminFrom(): JSX.Element {
  const {
    adminFormContent,
    HomeConfigHooksI: { handleHomeDataChange },
    ProjectHooksI: {
      handleProjectDataChange,
      handleProjectStatusChange,
      handleProjectTechnoClicked,
    },
    ProjectsConfigHooksI: { handleAddProject, handleDeleteProject },
    AboutConfigHooksI: {
      handleAboutDataOnChange,
      handleAboutTechnoClicked,
      handleAboutDevLanguageClicked,
    },
    ButtonConfigHooksI: { handleSubmit, handleReset },
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
      />
      {/*
      <ExperienceConfig
        experiences={adminFormContent.experiences}
        setExperiences={setExperiences}
      /> */}
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
    </div>
  );
}
