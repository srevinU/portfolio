import { useEffect, useState } from "react";
import "../style/components/ToolInfo.css";
import { TechnoT } from "../utils/types/SliderProjects";

function ToolInfo({
  title,
  tools,
  isMobile,
}: {
  title: string;
  tools: Array<TechnoT>;
  isMobile: boolean;
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

  if (!isMobile) {
    return (
      <section
        className={active ? "info active" : "info"}
        onClick={handleClick}
      >
        <div id="tool_info_title">
          <p data-testid="tool_info_title">{title}</p>
        </div>
        {tools.length && (
          <div className="logo_wrapper">
            {tools.map((tool: TechnoT) => (
              <img
                className="tool_logo"
                alt={tool.name}
                src={tool.src}
                key={tool._id}
                data-testid={`${tool._id}_tool_info_title`}
              />
            ))}
          </div>
        )}
      </section>
    );
  } else {
    return <></>;
  }
}

export default ToolInfo;
