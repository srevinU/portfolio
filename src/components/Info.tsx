import "../css/components/Info.css";
import { useState } from "react";

function Info(): JSX.Element {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <section className={active ? "info active" : "info"} onClick={handleClick}>
      <div id="title">
        <p>Technos</p>
      </div>
      <div className="logo_wrapper">
        <img
          className="tool_logo"
          src="/assets/logos/react.svg"
          alt="React.js"
        />
        <img
          className="tool_logo"
          src="/assets/logos/typescript.svg"
          alt="ts.js"
        />
      </div>
    </section>
  );
}

export default Info;
