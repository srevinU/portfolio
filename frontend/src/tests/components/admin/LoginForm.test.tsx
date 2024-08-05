import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../../components/admin/LoginForm";
describe("AdminForm", () => {
  it("Renders correctly", () => {
    render(<LoginForm handlePopin={() => null} />);
  });

  it("Input fields present", () => {
    render(<LoginForm handlePopin={() => null} />);
    ["email", "password"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Submit button present", () => {
    render(<LoginForm handlePopin={() => null} />);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("Invalid email", () => {
    render(<LoginForm handlePopin={() => null} />);
    const email = screen.getByTestId("email");
    userEvent.type(email, "invalid Email");
    expect(email).not.toBeValid();
  });

  it("Invalid password", () => {
    render(<LoginForm handlePopin={() => null} />);
    const password = screen.getByTestId("password");
    userEvent.type(password, "");
    expect(password).not.toBeValid();
  });

  it("Submit button enabled", () => {
    render(<LoginForm handlePopin={() => null} />);
    expect(screen.getByTestId("submit")).toBeEnabled();
  });
});
