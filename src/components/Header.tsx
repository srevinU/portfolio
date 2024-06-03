import { useState, useContext } from "react";
import "../style/components/Header.css";
import { ContryContext } from "../App";
import { LanguageT } from "../utils/types/general";
import { ReferencesT } from "../utils/types/Header";
import { SolcialNetwork } from "../utils/data/headerData";

function Header(references: ReferencesT): JSX.Element {
  const [menuActive, setMenuActive] = useState<string>("home");
  const contryContext = useContext(ContryContext);
  const language: LanguageT = contryContext.language;

  const scrollTo = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      <section className="logo_wrapper">
        {SolcialNetwork.map((social) => (
          <a href={social.href} target="_blanc">
            <img
              className="logo"
              alt={social.alt}
              src={social.logo}
              key={social.key}
            />
          </a>
        ))}
      </section>
      <section className="item_wrapper">
        <ul>
          <li
            className={menuActive === "home" ? "menuItem active" : "menuItem"}
            onClick={() => {
              setMenuActive("home");
              scrollTo(references.home.ref);
            }}
          >
            {references.home[language].name}
          </li>
          <li
            className={
              menuActive === "projects" ? "menuItem active" : "menuItem"
            }
            onClick={() => {
              setMenuActive("projects");
              scrollTo(references.projects.ref);
            }}
          >
            {references.projects[language].name}
          </li>
          <li
            className={menuActive === "about" ? "menuItem active" : "menuItem"}
            onClick={() => {
              setMenuActive("about");
              scrollTo(references.about.ref);
            }}
          >
            {references.about[language].name}
          </li>
          <li
            className={
              menuActive === "contact" ? "menuItem active" : "menuItem"
            }
            onClick={() => {
              setMenuActive("contact");
              scrollTo(references.contact.ref);
            }}
          >
            {references.contact[language].name}
          </li>
        </ul>
      </section>
      <section className="language_wrapper">
        <span
          className={
            contryContext.language === "EN" ? "language active" : "language"
          }
          onClick={() => contryContext.setLanguage("EN")}
        >
          EN
        </span>
        <span
          className={
            contryContext.language === "FR" ? "language active" : "language"
          }
          onClick={() => contryContext.setLanguage("FR")}
        >
          FR
        </span>
      </section>
      <div></div>
    </div>
  );
}

export default Header;
