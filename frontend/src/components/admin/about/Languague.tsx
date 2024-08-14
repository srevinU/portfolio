import { AboutDevLanguagePropsI } from "../../../utils/interfaces/props";

export function Language({
  parent,
  devLanguage,
  devLanguageRef,
  setDevLanguageRef,
  handleAboutDevLanguageClicked,
}: AboutDevLanguagePropsI): JSX.Element {
  return (
    <div>
      <label
        className={`config_techno ${devLanguage.active ? " active" : ""}`}
        onClick={() =>
          handleAboutDevLanguageClicked(
            devLanguage,
            devLanguageRef,
            setDevLanguageRef,
            parent,
          )
        }
      >
        {devLanguage.name}
      </label>
    </div>
  );
}
