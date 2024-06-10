import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../components/admin/LoginForm";
describe("ContactForm", () => {
  it("Renders correctly", () => {
      render(<LoginForm/>);
  });

  it("Input fields present", () => {
    render(<LoginForm/>);
    ["email", "password"].forEach((inputField) => {
      expect(screen.getByTestId(inputField)).toBeInTheDocument();
    });
  });

  it("Submit button present", () => {
    render(<LoginForm/>);
    expect(screen.getByTestId("submit")).toBeInTheDocument();
  });

  it("Invalid email", () => {
    render(<LoginForm/>);
    const email = screen.getByTestId("email");
    userEvent.type(email, "invalid Email");
    expect(email).not.toBeValid();
  });

  it("Invalid name", () => {
    render(<LoginForm/>);
    const password = screen.getByTestId("password");
    userEvent.type(password, "");
    expect(password).not.toBeValid();
  });

});
