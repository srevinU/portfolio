import { render, screen } from "@testing-library/react";
import ToolInfo from "../../components/ToolInfo";
import toolInfo from "../../utils/data/toolInfo";
import { TechnoT } from "../../utils/types/SliderProjects";

describe("ToolInfo", () => {
  const component = (
    <ToolInfo title={"Tools info"} tools={toolInfo} isMobile={false} />
  );
  it("Renders correctly", () => {
    render(component);
  });

  it("Title displayed", () => {
    render(component);
    expect(screen.getByTestId("tool_info_title")).toBeInTheDocument();
  });

  it("Logos displayed", () => {
    render(component);
    toolInfo.forEach((tool: TechnoT) => {
      expect(
        screen.getByTestId(`${tool.uuid}_tool_info_title`),
      ).toBeInTheDocument();
    });
  });

  it("Logos change on mouseover", () => {
    render(component);
    toolInfo.forEach((tool: TechnoT) => {
      const toolWrapper = screen.getByTestId(`${tool.uuid}_tool_info_title`);
      toolWrapper.onmouseover = () => {
        expect(toolWrapper.className).toContain("active");
      };
      toolWrapper.onmouseleave = () => {
        expect(toolWrapper.className).not.toContain("active");
      };
    });
  });
});
