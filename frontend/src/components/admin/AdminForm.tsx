import { useState } from "react";
import "../../style/components/admin/AdminForm.css";
import { sliderProjects } from "../../utils/data/sliderProjects";
import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./ProjectsConfig";
import AboutConfig from "./AboutConfig";
import ButtonsConfig from "./ButtonsConfig";
import ExperienceConfig from "./ExperienceConfig";
import { Experience } from "../../entities/Experience";
import { Project } from "../../entities/Project";
import { AboutForm } from "../../entities/AboutForm";
import { HomeForm } from "../../entities/HomeForm";

export default function AdminFrom(): JSX.Element {
  const [projects, setProjects] = useState<Array<Project>>(sliderProjects);
  const [experiences, setExperiences] = useState(Array<Experience>);
  const [aboutContent, setAboutContent] = useState(new AboutForm());
  const [homeContent, setHomeContent] = useState(new HomeForm());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ homeContent, projects, aboutContent, experiences });
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Reset");
  };

  return (
    <div className="admin_form">
      <HomeConfig homeContent={homeContent} setHomeContent={setHomeContent} />
      <ProjectsConfig projects={projects} setProjects={setProjects} />
      <AboutConfig
        aboutContent={aboutContent}
        setAboutContent={setAboutContent}
      />
      <ExperienceConfig
        experiences={experiences}
        setExperiences={setExperiences}
      />
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
    </div>
  );
}
