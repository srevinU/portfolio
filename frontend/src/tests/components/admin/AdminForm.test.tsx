import { render } from "@testing-library/react";
import AdminFrom from "../../../components/admin/AdminForm";
describe("AdminForm", () => {
  it("Renders correctly", async () => {
    await render(<AdminFrom />);
  });
});
