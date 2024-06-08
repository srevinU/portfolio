import ToolInfo from "../../components/ToolInfo";
import toolInfo from "../../utils/data/toolInfo";

describe("ToolInfo", () => {
  it("Renders correctly", () => {
    <ToolInfo title={"Tools info"} tools={toolInfo} />;
  });
});
