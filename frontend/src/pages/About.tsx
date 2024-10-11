import "../../src/style/pages/About.css";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";
import { AboutForm } from "../utils/entities/AboutForm";
import { Experience } from "../utils/entities/Experience";

export default function About({
  reference,
  language,
  isMobile,
  aboutData,
  experienceData,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
  aboutData: AboutForm;
  experienceData: Experience;
}): JSX.Element {
  const dynamicStyle = {
    aboutPage: {
      fontSize: isMobile ? "0.8em" : "",
    },
    aboutContent: {
      marginTop: isMobile ? "10%" : "",
    },
    disciplineContent: {
      gridAutoFlow: isMobile ? "row" : "column",
    },
  };

  return (
    <div
      className="about_page"
      style={dynamicStyle.aboutPage}
      ref={reference.ref}
    >
      <section className="about_content" style={dynamicStyle.aboutContent}>
        <div className="details_content">
          <h1>{aboutData[language].title}</h1>
          <p>{aboutData[language].description}</p>
        </div>
        {!isMobile && (
          <div className="experience_content">
            <h2>{experienceData.title[language]}</h2>
            <ul>
              {experienceData.jobs[language].map((job, index) => (
                <li key={index}>
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                  <p>{job.duration}</p>
                  <p>{job.responsibilities}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div
          className="discipline_content"
          style={dynamicStyle.disciplineContent}
        >
          <section className="disciplines">
            <h2>Disciplines</h2>
            <ul>
              {aboutData.disciplines.map((discipline, index) => (
                <li key={index}>{discipline}</li>
              ))}
            </ul>
          </section>
          <section className="stack_logos">
            <h2>Technos</h2>
            <div className="techno_logos">
              {aboutData.technos.map((tech, index) => (
                <img key={index} src={tech.src} alt={tech.name} />
              ))}
            </div>
          </section>
          <section className="stack_langages">
            <h2>{language === "FR" ? "Langages" : "Languages"}</h2>
            <div className="langage_logos">
              {aboutData.languages.map((lang, index) => (
                <img key={index} src={lang.src} alt={lang.name} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
