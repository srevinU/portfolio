import { LanguageT } from "../../utils/types/general";
import Reference from "../../utils/tools/Reference";
import { ReferencesT } from "../../utils/types/Header";
import "../../style/components/Header.css";

export function HeaderMenus({
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
            const { key, name, ref, dataTestId } = references[reference];
            return (
              <li
                key={key}
                data-testid={dataTestId}
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
  