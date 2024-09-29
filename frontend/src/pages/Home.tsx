import "../../src/style/pages/Home.css";
import { HomeForm } from "../utils/entities/HomeForm";
// import homeData from "../utils/data/home";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Home({
  reference,
  language,
  isMobile,
  homeData,
}: {
  reference: Reference;
  language: LanguageT;
  isMobile: boolean;
  homeData: HomeForm;
}): JSX.Element {
  const dynamicStyle = {
    title: {
      fontSize: isMobile ? "50px" : "150px",
    },
    subtitle: {
      fontSize: isMobile ? "15px" : "22px",
    },
  };

  console.log("homeData", homeData);

  return (
    <div className="home_page" ref={reference.ref}>
      <section className="home_content">
        <h1 className="home_title" style={dynamicStyle.title}>
          {homeData[language].title}
        </h1>
        <h5 className="home_subtitle" style={dynamicStyle.subtitle}>
          {homeData[language].subtitle}
        </h5>
      </section>
    </div>
  );
}
