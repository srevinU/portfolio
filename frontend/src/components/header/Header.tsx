import { useState, useEffect } from "react";
import { LanguageT } from "../../utils/types/general";
import { ReferencesT } from "../../utils/types/Header";
import {
  GetHeaderMenuActive,
  socialNetworks,
} from "../../utils/data/headerData";
import "../../style/components/Header.css";
import Reference from "../../utils/tools/Reference";
import { HeaderLanguages } from "./HeaderLanguages";
import { HeaderMenus } from "./HeaderMenus";
import { HeaderSocials } from "./HeaderSocials";

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
}
