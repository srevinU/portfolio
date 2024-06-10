import { IoMdSettings } from "react-icons/io";
import "../style/pages/Maintenance.css";
import maintenanceContent from "../utils/data/maintenaceContent";
import { LanguageT } from "../utils/types/general";

function Maintenance({ language }: { language: LanguageT }): JSX.Element {
  return (
    <div className="maintenance_page">
      <section className="maintenance_bg">
        <IoMdSettings size={75} />
        <h1>{maintenanceContent[language].title}</h1>
        <p>{maintenanceContent[language].body}</p>
      </section>
    </div>
  );
}

export default Maintenance;
