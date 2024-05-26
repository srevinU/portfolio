import { IoMdSettings } from "react-icons/io";
import "../css/pages/Maintenance.css";

function Maintenance(): JSX.Element {
  return (
    <div className="maintenance_page">
      <section className="maintenance_bg">
        <IoMdSettings size={75} />
        <h1>
          We're currently undergoing maintenance <br />
          to improve your experience.
        </h1>
        <p>
          Please bear with us while we make these enhancements. We'll be back
          shortly.
        </p>
        <p>Thank you for your patience!</p>
      </section>
    </div>
  );
}

export default Maintenance;
