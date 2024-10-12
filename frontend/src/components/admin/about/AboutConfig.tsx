import "../../../style/components/admin/AboutConfig.css";
import { AboutConfigPropsI } from "../../../utils/interfaces/props";
import { DevLanguage } from "../../../utils/entities/DevLangague";
import { Techno } from "./Techno";
import { Language } from "./Languague";
import { useReferencialsHooks } from "../../../hooks/admin/referencials";
import { Disciplines } from "./Disciplines";

export default function AboutConfig({
  aboutContent,
  handleAboutDataOnChange,
  handleAboutTechnoClicked,
  handleAboutDevLanguageClicked,
  handleDisciplinesSelected,
}: AboutConfigPropsI): JSX.Element {
  const { technosRef, devLanguageRef, disciplinesRef } = useReferencialsHooks();

  return (
    <div className="about_config">
      <h2 className="section_title">About</h2>
      <section className="section_about">
        <div className="section_description">
          <h3>Title (EN)</h3>
          <input
            type="text"
            name="title"
            value={aboutContent.EN.title}
            onChange={(event) => handleAboutDataOnChange(event, "EN")}
          />
          <h3>Description (EN)</h3>
          <textarea
            name="description"
            value={aboutContent.EN.description}
            onChange={(event) => handleAboutDataOnChange(event, "EN")}
          />
          <h3>Title (FR)</h3>
          <input
            type="text"
            name="title"
            value={aboutContent.FR.title}
            onChange={(event) => handleAboutDataOnChange(event, "FR")}
          />
          <h3>Description (FR)</h3>
          <textarea
            name="description"
            value={aboutContent.FR.description}
            onChange={(event) => handleAboutDataOnChange(event, "FR")}
          />
          <h3>Technos</h3>
          <div className="about_technos">
            {technosRef.map((techno) => (
              <Techno
                key={techno._id}
                techno={techno}
                parent={aboutContent}
                handleAboutTechnoClicked={handleAboutTechnoClicked}
              />
            ))}
          </div>
          <h3>Languages</h3>
          <div className="about_languages">
            {devLanguageRef.map((devLanguage: DevLanguage) => (
              <Language
                key={devLanguage._id}
                parent={aboutContent}
                devLanguage={devLanguage}
                handleAboutDevLanguageClicked={handleAboutDevLanguageClicked}
              />
            ))}
          </div>
        </div>
        <h3>Disciplines</h3>
        <div>
          <Disciplines
            disciplineContent={aboutContent.disciplines}
            disciplineRef={disciplinesRef}
            handleDisciplinesSelected={handleDisciplinesSelected}
          />
        </div>
      </section>
    </div>
  );
}
