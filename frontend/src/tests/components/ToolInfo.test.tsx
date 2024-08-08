import { render, screen } from "@testing-library/react";
import ToolInfo from "../../components/ToolInfo";
import toolInfo from "../../utils/data/toolInfo";
import { TechnoT } from "../../utils/types/SliderProjects";

describe("ToolInfo", () => {
  it("Renders correctly", () => {
    render(<ToolInfo title={"Tools info"} tools={toolInfo} isMobile={false} />);
  });

  it("Title displayed", () => {
    render(<ToolInfo title={"Tools info"} tools={toolInfo} isMobile={false} />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  it("Logos displayed", () => {
    render(<ToolInfo title={"Tools info"} tools={toolInfo} isMobile={false} />);
    toolInfo.forEach((tool: TechnoT) => {
      expect(screen.getByTestId(tool.uuid)).toBeInTheDocument();
    });
  });

  it("Logos change on mouseover", () => {
    render(<ToolInfo title={"Tools info"} tools={toolInfo} isMobile={false} />);
    toolInfo.forEach((tool: TechnoT) => {
      const toolWrapper = screen.getByTestId(tool.uuid);
      toolWrapper.onmouseover = () => {
        expect(toolWrapper.className).toContain("active");
      };
      toolWrapper.onmouseleave = () => {
        expect(toolWrapper.className).not.toContain("active");
      };
    });
  });
});
