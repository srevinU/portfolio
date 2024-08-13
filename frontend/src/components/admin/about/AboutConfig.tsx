import "../../../style/components/admin/AboutConfig.css";
import { AboutConfigPropsI } from "../../../utils/interfaces/props";
import { DevLanguage } from "../../../entities/DevLangague";
import { Techno } from "./Techno";
import { Language } from "./Languague";
import { useReferencialsHooks } from "../../../hooks/admin/referencials";

export default function AboutConfig({
  aboutContent,
  handleAboutDataOnChange,
  handleAboutTechnoClicked,
  handleAboutDevLanguageClicked,
}: AboutConfigPropsI): JSX.Element {
  const { technosRef, setTechnosRef, devLanguageRef, setDevLanguageRef } =
    useReferencialsHooks({ aboutContent });

  return (
    <div className="about_config">
      <h2 className="section_title">About</h2>
      <section className="section_about">
        <div className="section_description">
          <h3>Title</h3>
          <input
            type="text"
            name="title"
            value={aboutContent.title}
            onChange={handleAboutDataOnChange}
          />
          <h3>Description</h3>
          <textarea
            name="description"
            value={aboutContent.description}
            onChange={(event) => handleAboutDataOnChange(event)}
          />
          <h3>Technos</h3>
          <div className="about_technos">
            {technosRef.map((techno) => (
              <Techno
                key={techno.uuid}
                techno={techno}
                technosRef={technosRef}
                setTechnosRef={setTechnosRef}
                parent={aboutContent}
                handleAboutTechnoClicked={handleAboutTechnoClicked}
              />
            ))}
          </div>
          <h3>Languages</h3>
          <div className="about_languages">
            {devLanguageRef.map((devLanguage: DevLanguage) => (
              <Language
                key={devLanguage.uuid}
                devLanguage={devLanguage}
                parent={aboutContent}
                handleAboutDevLanguageClicked={handleAboutDevLanguageClicked}
                devLanguageRef={devLanguageRef}
                setDevLanguageRef={setDevLanguageRef}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
