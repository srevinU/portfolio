import { render, screen } from "@testing-library/react";
import ButtonsConfig from "../../../components/admin/ButtonsConfig";
describe("ButtonConfig", () => {
  it("Renders correctly", () => {
    render(
      <ButtonsConfig handleSubmit={() => null} handleReset={() => null} />,
    );
  });

  it("Buttons present", () => {
    render(
      <ButtonsConfig handleSubmit={() => null} handleReset={() => null} />,
    );
    ["Submit", "Reset"].forEach((button) => {
      expect(screen.getByText(button)).toBeInTheDocument();
    });
  });

  it("Buttons are clickable", () => {
    const handleSubmit = jest.fn();
    const handleReset = jest.fn();
    render(
      <ButtonsConfig handleSubmit={handleSubmit} handleReset={handleReset} />,
    );
    const submit = screen.getByText("Submit");
    const reset = screen.getByText("Reset");
    submit.click();
    reset.click();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleReset).toHaveBeenCalledTimes(1);
  });
});
