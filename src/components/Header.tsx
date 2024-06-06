import {
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  RefObject,
} from "react";
import { ContryContext } from "../App";
import { LanguageT } from "../utils/types/general";
import { SocialNetworkT } from "../utils/types/Header";
import { ReferencesT } from "../utils/types/Header";
import languages from "../utils/data/languages";
import { SolcialNetwork } from "../utils/data/headerData";
import "../style/components/Header.css";

function HeaderMenu({
  references,
  menuActive,
  language,
  setMenuActive,
  scrollTo,
}: {
  references: ReferencesT;
  menuActive: string;
  language: LanguageT;
  setMenuActive: Dispatch<SetStateAction<string>>;
  scrollTo: (ref: RefObject<HTMLDivElement>) => void;
}): JSX.Element {
  return (
    <>
      <ul>
        {Object.keys(references).map((menu) => (
          <li
            key={menu}
            className={`menuItem ${menuActive === menu ? "active" : ""}`}
            onClick={() => {
              setMenuActive(menu);
              scrollTo(references[menu].ref);
            }}
          >
            {references[menu][language].name}
          </li>
        ))}
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
  const [menuActive, setMenuActive] = useState<string>("home");
  const contryContext = useContext(ContryContext);
  const language: LanguageT = contryContext.language;

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
          setMenuActive={setMenuActive}
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
