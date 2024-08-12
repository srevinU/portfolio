import { useState } from "react";
import "../../style/components/admin/AdminForm.css";
import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./ProjectsConfig";
import AboutConfig from "./AboutConfig";
import ButtonsConfig from "./ButtonsConfig";
import ExperienceConfig from "./ExperienceConfig";
import { AdminForm } from "../../entities/AdminForm";
import useAdminFormHooks from "../../hooks/admin/adminForm";
import useHomeConfigHooks from "../../hooks/admin/homeConfig";
import useButtonConfigHooks from "../../hooks/admin/buttonConfig";
import {
  useProjectHooks,
  useProjectsConfigHooks,
} from "../../hooks/admin/projectConfig";

export default function AdminFrom(): JSX.Element {
  const [adminFormContent, setAdminFormContent] = useState(new AdminForm());

  const { handleHomeDataChange } = useHomeConfigHooks({
    adminFormContent,
    setAdminFormContent,
  });
  const { handleAddProject, handleDeleteProject } = useProjectsConfigHooks({
    adminFormContent,
    setAdminFormContent,
  });
  const {
    handleProjectDataChange,
    handleProjectStatusChange,
    handleProjectTechnoClicked,
  } = useProjectHooks({ adminFormContent, setAdminFormContent });
  const { handleSubmit, handleReset } = useButtonConfigHooks(adminFormContent);

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
      {/* <AboutConfig
        aboutContent={adminFormContent.about}
        setAboutContent={setAboutContent}
      />
      <ExperienceConfig
        experiences={adminFormContent.experiences}
        setExperiences={setExperiences}
      /> */}
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
    </div>
  );
}
