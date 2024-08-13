import { AboutDevLanguagePropsI } from "../../../utils/interfaces/props";

export function Language({
  devLanguage,
  parent,
  handleAboutDevLanguageClicked,
  devLanguageRef,
  setDevLanguageRef,
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
