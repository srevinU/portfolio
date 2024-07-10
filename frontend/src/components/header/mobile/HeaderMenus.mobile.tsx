import { useState } from "react";
import { LanguageT } from "../../../utils/types/general";
import { ReferencesT } from "../../../utils/types/Header";
import "../../../.../../style/components/header/mobile/Header.mobile.css";
import Reference from "../../../utils/tools/Reference";
import { IoMenu } from "react-icons/io5";

export function HeaderMobileMenus({
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
  const [menuSectionActive, setMenuSectionActive] = useState<Boolean>(false);
  return (
    <>
      <IoMenu
        className="m_menu_icon"
        onClick={() => setMenuSectionActive(!menuSectionActive)}
        onMouseLeave={() => setMenuSectionActive(false)}
      />
      <div className={`m_menu ${menuSectionActive ? "active" : ""}`}>
        <ul>
          {Object.keys(references).map((reference) => {
            const { key, name, ref, dataTestId } = references[reference];
            return (
              <li
                key={key}
                data-testid={dataTestId}
                className={`menuItem ${menuActive?.name[language] === name[language] ? "active" : ""}`}
                onClick={() => {
                  scrollTo(ref);
                  setMenuSectionActive(!menuSectionActive);
                }}
              >
                {`${name[language][0].toLocaleUpperCase()}${name[language].slice(1)}`}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
