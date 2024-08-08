import { LanguageT } from "../../../utils/types/general";
import Reference from "../../../utils/tools/Reference";
import "../../../.../../style/components/header/web/Header.web.css";

export function HeaderMenus({
  language,
  menuActive,
  references,
  scrollTo,
}: {
  language: LanguageT;
  menuActive: Reference;
  references: Array<Reference>;
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
}): JSX.Element {
  return (
    <>
      <ul>
        {references.map((reference) => {
          const { uuid, name, ref } = reference;
          return (
            <li
              key={uuid}
              data-testid={uuid}
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
