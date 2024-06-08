import Slider from "../../components/Slider";
import { sliderProjects } from "../../utils/data/sliderProjects";

describe("Slider", () => {
  it("Renders correctly", () => {
    <Slider sliderProjects={sliderProjects} language={"EN"} />;
  });
});
