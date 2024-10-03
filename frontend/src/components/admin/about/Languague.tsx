import { AboutDevLanguagePropsI } from "../../../utils/interfaces/props";
import { isActive } from "../../../utils/tools/funtions";

export function Language({
  parent,
  devLanguage,
  handleAboutDevLanguageClicked,
}: AboutDevLanguagePropsI): JSX.Element {
  const { _id } = devLanguage;
  const isActiveDevLanguage = isActive(_id, parent.languages);
  return (
    <div>
      <label
        className={
          isActiveDevLanguage ? `config_techno active` : `config_techno`
        }
        onClick={() => handleAboutDevLanguageClicked(devLanguage)}
      >
        {devLanguage.name}
      </label>
    </div>
  );
}
