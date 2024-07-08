import languages from "../../../utils/data/languages";
import { LanguageT } from "../../../utils/types/general";
import Reference from "../../../utils/tools/Reference";
import { ReferencesT } from "../../../utils/types/Header";
import "../../../.../../style/components/web/Header.web.css";

export function HeaderLanguages({
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
          data-testid={lang.name}
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
