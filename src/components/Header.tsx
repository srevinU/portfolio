import { useState, useEffect } from "react";
import { LanguageT } from "../utils/types/general";
import { SocialNetworkT, ReferencesT } from "../utils/types/Header";
import languages from "../utils/data/languages";
import { GetHeaderMenuActive, SolcialNetwork } from "../utils/data/headerData";
import "../style/components/Header.css";
import Reference from "../utils/tools/Reference";

function HeaderMenu({
  language,
  menuActive,
  references,
  scrollTo,
}: {
  language: LanguageT;
  menuActive: Reference;
  references: ReferencesT;
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}): JSX.Element {
  return (
    <>
      <ul>
        {Object.keys(references).map((reference) => {
          const { key, name, ref } = references[reference];
          return (
            <li
              key={key}
              className={`menuItem ${menuActive?.name[language] === name[language] ? "active" : ""}`}
              onClick={() => {
                scrollTo(ref);
              }}
            >
              {name[language]}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function HeaderLanguages({
  language,
  menuActive,
  setLanguage,
  setMenuActive,
}: {
  language: LanguageT;
  menuActive: Reference;
  references: ReferencesT;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageT>>;
  setMenuActive: React.Dispatch<React.SetStateAction<Reference>>;
}): JSX.Element {
  return (
    <>
      {languages.map((lang) => (
        <span
          className={`language ${language === lang.name ? "active" : ""}`}
          onClick={() => {
            setLanguage(lang.name);
            setMenuActive(menuActive);
          }}
          key={lang.key}
        >
          {lang.name}
        </span>
      ))}
    </>
  );
}

function HeaderSocialLogos({
  SolcialNetwork,
}: {
  SolcialNetwork: SocialNetworkT;
}): JSX.Element {
  return (
    <>
      {SolcialNetwork.map((social: any) => (
        <a href={social.href} target="_blanc" key={social.key}>
          <img className="logo" alt={social.alt} src={social.logo} />
        </a>
      ))}
      ;
    </>
  );
}

export default function Header({
  references,
  language,
  setLanguage,
}: {
  references: ReferencesT;
  language: LanguageT;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageT>>;
}): JSX.Element {
  const [menuActive, setMenuActive] = useState<Reference>(references.home);

  useEffect(() => {
    const scrollChecker = (e: any): void => {
      const { scrollTop }: { scrollTop: number } = e.target.documentElement;
      if (scrollTop) {
        const menu: Reference = GetHeaderMenuActive(
          Math.floor(scrollTop),
          references,
        );
        setMenuActive(menu);
      }
    };
    window.addEventListener("scroll", scrollChecker);
    return () => window.removeEventListener("scroll", scrollChecker);
  });

  const scrollTo = (ref: React.RefObject<HTMLDivElement>): void => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="header">
      <section className="logo_wrapper">
        <HeaderSocialLogos SolcialNetwork={SolcialNetwork} />
      </section>
      <section className="item_wrapper">
        <HeaderMenu
          language={language}
          menuActive={menuActive}
          references={references}
          scrollTo={scrollTo}
        />
      </section>
      <section className="language_wrapper">
        <HeaderLanguages
          language={language}
          menuActive={menuActive}
          references={references}
          setLanguage={setLanguage}
          setMenuActive={setMenuActive}
        />
      </section>
    </div>
  );
}
