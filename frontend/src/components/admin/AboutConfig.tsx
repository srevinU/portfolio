import "../../style/components/admin/AboutConfig.css";
import { TechnoT } from "../../utils/types/SliderProjects";
import { DevLanguageT } from "../../utils/types/AboutContent";
import useAboutConfigHooks from "../../hooks/admin/aboutConfig";
import { AboutForm } from "../../entities/AboutForm";

function Techno({
  techno,
  handleClick,
}: {
  techno: TechnoT;
  handleClick: Function;
}): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${techno.active ? " active" : ""}`}
        onClick={() => handleClick(techno, "technos")}
      >
        {techno.name}
      </label>
    </div>
  );
}

function Language({
  language,
  handleClick,
}: {
  language: DevLanguageT;
  handleClick: Function;
}): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${language.active ? " active" : ""}`}
        onClick={() => handleClick(language, "languages")}
      >
        {language.name}
      </label>
    </div>
  );
}

export default function AboutConfig({
  aboutContent,
  setAboutContent,
}: {
  aboutContent: AboutForm;
  setAboutContent: Function;
}): JSX.Element {
  const { handleOnChange, technos, languages, handleLabelClicked } =
    useAboutConfigHooks(setAboutContent, aboutContent);

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
            onChange={handleOnChange}
          />
          <h3>Description</h3>
          <textarea
            name="description"
            value={aboutContent.description}
            onChange={handleOnChange}
          />
          <h3>Technos</h3>
          <div className="about_technos">
            {technos.map((techno) => (
              <Techno
                techno={techno}
                handleClick={handleLabelClicked}
                key={techno.uuid}
              />
            ))}
          </div>
          <h3>Languages</h3>
          <div className="about_languages">
            {languages.map((language) => (
              <Language
                language={language}
                handleClick={handleLabelClicked}
                key={language.uuid}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
