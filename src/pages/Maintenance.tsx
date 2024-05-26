import { IoMdSettings } from "react-icons/io";
import "../css/pages/Maintenance.css";
import maintenanceContent from "../utils/struc/maintenaceContent";

function Maintenance(): JSX.Element {
  return (
    <div className="maintenance_page">
      <section className="maintenance_bg">
        <IoMdSettings size={75} />
        <h1>{maintenanceContent.title}</h1>
        <p>{maintenanceContent.body}</p>
      </section>
    </div>
  );
}

export default Maintenance;
