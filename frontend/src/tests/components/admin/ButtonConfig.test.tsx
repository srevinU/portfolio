import { render, screen } from "@testing-library/react";
import ButtonsConfig from "../../../components/admin/ButtonsConfig";
describe("ButtonConfig", () => {
  const handleSubmit = jest.fn();
  const handleReset = jest.fn();
  const components = (
    <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />
  );

  it("Renders correctly", () => {
    render(components);
  });

  it("Buttons present", () => {
    render(components);
    ["Submit", "Reset"].forEach((button) => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  it("Buttons are clickable", () => {
    render(components);
    const submit = screen.getByText("Submit");
    const reset = screen.getByText("Reset");
    submit.click();
    reset.click();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});
