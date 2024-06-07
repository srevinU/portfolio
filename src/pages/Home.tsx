import "../style/pages/Home.css";
import homeData from "../utils/data/home";
import { ContryContext } from "../App";
import { useContext } from "react";
import Reference from "../utils/tools/Reference";

export default function Home({
  reference,
}: {
  reference: Reference;
}): JSX.Element {
  const language: "EN" | "FR" = useContext(ContryContext).language;

  return (
    <div className="home_page" ref={reference.ref}>
      <section className="home_content">
        <h1 className="home_title">{homeData[language].title}</h1>
        <h5 className="home_subtitle">{homeData[language].subtitle}</h5>
      </section>
    </div>
  );
}
