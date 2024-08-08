import { useState } from "react";
import "../../style/components/admin/AdminForm.css";
import { ProjectT } from "../../utils/types/SliderProjects";
import { sliderProjects } from "../../utils/data/sliderProjects";

import HomeConfig from "./HomeConfig";
import ProjectsConfig from "./ProjectsConfig";
import AboutConfig from "./AboutConfig";
import ButtonsConfig from "./ButtonsConfig";
import ExperienceConfig from "./ExperienceConfig";
import { Experience } from "../../utils/data/aboutContent";

export default function AdminFrom(): JSX.Element {
  const [projects, setProjects] = useState<Array<ProjectT>>(sliderProjects);
  const [aboutContent, setAboutContent] = useState({
    title: "",
    description: "",
    technos: [],
    languages: [],
    disciplines: [] as [],
  });
  const [experiences, setExperiences] = useState(Array<Experience>);
  const [homeData, setHomeData] = useState({ title: "", subTitle: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ homeData, projects, aboutContent, experiences });
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Reset");
  };

  return (
    <div className="admin_form">
      <HomeConfig homeData={homeData} setHomeData={setHomeData} />
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
