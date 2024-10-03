import { AboutDevLanguagePropsI } from "../../../utils/interfaces/props";

export function Language({
  parent,
  devLanguage,
  handleAboutDevLanguageClicked,
}: AboutDevLanguagePropsI): JSX.Element {
  const { _id } = devLanguage;
  const isActive = (id: string, array: Array<any>) => {
    return array.some((obj) => obj._id === id);
  };
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
