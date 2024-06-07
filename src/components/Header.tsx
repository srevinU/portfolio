import {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { ContryContext } from "../App";
import { LanguageT, LanguagesT } from "../utils/types/general";
import { SocialNetworkT, ReferencesT } from "../utils/types/Header";
import languages from "../utils/data/languages";
import { GetHeaderMenuActive, SolcialNetwork } from "../utils/data/headerData";
import "../style/components/Header.css";

function HeaderMenu({
  references,
  menuActive,
  language,
  scrollTo,
}: {
  references: ReferencesT;
  menuActive: string | null;
  language: LanguageT;
  scrollTo: (ref: RefObject<HTMLDivElement>) => void;
}): JSX.Element {
  return (
    <>
      <ul>
        {Object.keys(references).map((reference) => {
          const { ref, name } = references[reference];
          return (
            <li
              key={reference}
              className={`menuItem ${menuActive === reference ? "active" : ""}`}
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
  setLanguage,
}: {
  language: LanguageT;
  setLanguage: Dispatch<SetStateAction<LanguageT>>;
}): JSX.Element {
  return (
    <>
      {languages.map((lang) => (
        <span
          className={`language ${language === lang.name ? "active" : ""}`}
          onClick={() => setLanguage(lang.name)}
          key={lang.key}
        >
          {lang.name}
        </span>
      ))}
    </>
  );
}

function HeaderLogos({
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

export default function Header(references: ReferencesT): JSX.Element {
  const [menuActive, setMenuActive] = useState<string | null>("home");
  const contryContext = useContext(ContryContext);
  const language: LanguageT = contryContext.language;

  useEffect(() => {
    const scrollChecker = (e: any) => {
      const { scrollTop }: { scrollTop: number } = e.target.documentElement;
      if (scrollTop) {
        const menu: LanguagesT | null = GetHeaderMenuActive(
          Math.floor(scrollTop),
          references,
        );
        menu ? setMenuActive(menu[language]) : setMenuActive(null);
      }
    };
    window.addEventListener("scroll", scrollChecker);
    return () => window.removeEventListener("scroll", scrollChecker);
  });

  const scrollTo = (ref: RefObject<HTMLDivElement>): void => {
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
        <HeaderLogos SolcialNetwork={SolcialNetwork} />
      </section>
      <section className="item_wrapper">
        <HeaderMenu
          references={references}
          menuActive={menuActive}
          language={language}
          scrollTo={scrollTo}
        />
      </section>
      <section className="language_wrapper">
        <HeaderLanguages
          language={language}
          setLanguage={contryContext.setLanguage}
        />
      </section>
    </div>
  );
}
