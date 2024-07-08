import { useEffect, useState } from "react";
import "../style/components/web/ToolInfo.css";
import { TechnoT } from "../utils/types/SliderProjects";

function ToolInfo({
  title,
  tools,
}: {
  title: string;
  tools: Array<TechnoT>;
}): JSX.Element {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    let timeOutId: NodeJS.Timeout | null = null;

    if (active) {
      timeOutId = setTimeout(() => {
        setActive(false);
      }, 3000);
    }

    return (): void => {
      if (timeOutId) return clearTimeout(timeOutId);
    };
  }, [active]);

  const handleClick = (): void => {
    setActive(!active);
  };

  return (
    <section className={active ? "info active" : "info"} onClick={handleClick}>
      <div id="tool_info_title">
        <p data-testid={"title"}>{title}</p>
      </div>
      {tools.length && (
        <div className="logo_wrapper">
          {tools.map((tool: TechnoT) => (
            <img
              className="tool_logo"
              alt={tool.name}
              src={tool.src}
              key={tool.key}
              data-testid={tool.dataTestId}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ToolInfo;
