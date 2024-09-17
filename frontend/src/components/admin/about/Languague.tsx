import { AboutDevLanguagePropsI } from "../../../utils/interfaces/props";

export function Language({
  parent,
  devLanguage,
  handleAboutDevLanguageClicked,
}: AboutDevLanguagePropsI): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${parent.languages.includes(devLanguage._id) ? " active" : ""}`}
        onClick={() => handleAboutDevLanguageClicked(devLanguage)}
      >
        {devLanguage.name}
      </label>
    </div>
  );
}
