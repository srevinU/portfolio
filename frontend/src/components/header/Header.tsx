import { useState, useEffect } from "react";
import { LanguageT } from "../../utils/types/general";
import {
  GetHeaderMenuActive,
  socialNetworks,
} from "../../utils/data/headerData";
import "../../style/components/header/web/Header.web.css";
import "../../style/components/header/mobile/Header.mobile.css";
import Reference from "../../utils/tools/Reference";
import { HeaderLanguages } from "./web/HeaderLanguages";
import { HeaderMenus } from "./web/HeaderMenus";
import { HeaderSocials } from "./web/HeaderSocials";
import { HeaderMobileMenus } from "./mobile/HeaderMenus.mobile";

export default function Header({
  references,
  language,
  setLanguage,
  isMobile,
}: {
  references: Array<Reference>;
  language: LanguageT;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageT>>;
  isMobile: boolean;
}): JSX.Element {
  const [menuActive, setMenuActive] = useState<Reference>(references[0]);
  const [headerBgColorActive, setHeaderBgColorActive] =
    useState<boolean>(false);

  useEffect(() => {
    const scrollChecker = (e: any): void => {
      const { scrollTop }: { scrollTop: number } = e.target.documentElement;
      if (scrollTop) {
        setHeaderBgColorActive(scrollTop > 5 ? true : false);
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

  if (!isMobile) {
    return (
      <div
        className="header"
        style={{
          backgroundColor: headerBgColorActive ? "black" : "transparent",
        }}
      >
        <section className="logo_wrapper">
          <HeaderSocials SolcialNetworks={socialNetworks} />
        </section>
        <section className="item_wrapper">
          <HeaderMenus
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
  } else {
    return (
      <div className="m_header">
        <section className="m_item_wrapper">
          <HeaderMobileMenus
            language={language}
            menuActive={menuActive}
            references={references}
            scrollTo={scrollTo}
          />
        </section>
        <p
          style={{ color: "#f5a623", fontWeight: 700 }}
        >{`${menuActive.name[language][0].toUpperCase()}${menuActive.name[language].slice(1)}`}</p>
        <section className="m_language_wrapper">
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
}
