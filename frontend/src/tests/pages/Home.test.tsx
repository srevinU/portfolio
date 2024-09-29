import { render } from "@testing-library/react";
import Home from "../../pages/Home";
import Reference from "../../utils/tools/Reference";
import adminFormContent from "../../utils/data/adminForm";


test("Renders correctly", () => {
  const reference: Reference = new Reference(
    { FR: "acceuil", EN: "home" },
    { current: document.createElement("div") },
  );
  render(<Home reference={reference} language={"EN"} isMobile={false} homeData={adminFormContent.home}/>);
});
