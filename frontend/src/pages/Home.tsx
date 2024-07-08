import "../../src/style/pages/Home.css";
import homeData from "../utils/data/home";
import Reference from "../utils/tools/Reference";
import { LanguageT } from "../utils/types/general";

export default function Home({
  reference,
  language,
}: {
  reference: Reference;
  language: LanguageT;
}): JSX.Element {
  return (
    <div className="home_page" ref={reference.ref}>
      <section className="home_content">
        <h1 className="home_title">{homeData[language].title}</h1>
        <h5 className="home_subtitle">{homeData[language].subtitle}</h5>
      </section>
    </div>
  );
}
