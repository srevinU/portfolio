import "../../src/style/pages/About.css";
import aboutContent from "../utils/data/aboutContent";
import { LanguageT } from "../utils/types/general";
import Reference from "../utils/tools/Reference";

export default function About({
  reference,
  language,
  isMobile,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
}): JSX.Element {
  const dynamicStyle = {
    aboutPage: {
      fontSize: isMobile ? "0.8em" : "",
      marginTop: isMobile ? "2%" : "",
    },
    aboutContent: {
      justifyContent: isMobile ? "center" : "center",
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
          <h1>{aboutContent[language].details.title}</h1>
          <p>{aboutContent[language].details.description}</p>
        </div>
        {!isMobile && (
          <div className="experience_content">
            <h2>{aboutContent[language].experiences.title}</h2>
            <ul>
              {aboutContent[language].experiences.jobs.map((job, index) => (
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
            <h2>{aboutContent[language].disciplines.title}</h2>
            <ul>
              {aboutContent[language].disciplines.list.map(
                (discipline, index) => (
                  <li key={index}>{discipline}</li>
                ),
              )}
            </ul>
          </section>
          <section className="stack_logos">
            <h2> {aboutContent[language].technologies.title} </h2>
            <div className="techno_logos">
              {aboutContent[language].technologies.list.map((tech, index) => (
                <img key={index} src={`/assets/logos/${tech}.svg`} alt={tech} />
              ))}
            </div>
          </section>
          <section className="stack_langages">
            <h2>{aboutContent[language].languages.title}</h2>
            <div className="langage_logos">
              {aboutContent[language].languages.list.map((lang, index) => (
                <img key={index} src={`/assets/logos/${lang}.svg`} alt={lang} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
