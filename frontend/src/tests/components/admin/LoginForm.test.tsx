import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../../components/admin/LoginForm";
describe("LoginForm", () => {
  const components = <LoginForm handlePopin={() => null} />;

  it("Renders correctly", () => {
    render(components);
  });

  it("Input fields present", () => {
    render(components);
    ["email", "password"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Submit button present", () => {
    render(components);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("Invalid email", () => {
    render(components);
    const email = screen.getByTestId("email");
    userEvent.type(email, "invalid Email");
    expect(email).not.toBeValid();
  });

  it("Invalid password", () => {
    render(components);
    const password = screen.getByTestId("password");
    userEvent.type(password, "");
    expect(password).not.toBeValid();
  });

  it("Submit button enabled", () => {
    render(components);
    expect(screen.getByTestId("submit")).toBeEnabled();
  });
});
