import { render, screen } from "@testing-library/react";
import Panel from "../../../components/admin/Panel";

describe("AdminForm", () => {
  it("Renders correctly", () => {
    render(<Panel />);
  });

  it("Columns present", () => {
    render(<Panel />);
    ["name-col", "email-col", "message-col", "state-col"].forEach((column) => {
      expect(screen.getByTestId(column)).toBeInTheDocument();
    });
  });

  it("Values are present", () => {
    render(<Panel />);
    ["name", "email", "message", "state", "unread", "read"].forEach((value) => {
      expect(screen.getByTestId(`${value}_1`)).toBeInTheDocument();
      expect(screen.getByTestId(`${value}_2`)).toBeInTheDocument();
    });
  });

  it("Save button present", () => {
    render(<Panel />);
    expect(screen.getByTestId("save")).toBeInTheDocument();
  });

  it("Lougout button present", () => {
    render(<Panel />);
    expect(screen.getByTestId("logout")).toBeInTheDocument();
  });

  it("Save button disabled", () => {
    render(<Panel />);
    expect(screen.getByTestId("save")).toBeDisabled();
  });

  it("Delete button present", () => {
    render(<Panel />);
    expect(screen.getByTestId("delete_1")).toBeInTheDocument();
    expect(screen.getByTestId("delete_2")).toBeInTheDocument();
  });

  it("Option change", () => {
    render(<Panel />);
    const unread1 = screen.getByTestId("unread_1");
    const read2 = screen.getByTestId("read_2");
    unread1.click();
    read2.click();
  });

  it("Search change", () => {
    render(<Panel />);
    const name = screen.getByTestId("name-col");
    const email = screen.getByTestId("email-col");
    const message = screen.getByTestId("message-col");
    const state = screen.getByTestId("state-col");
    name.click();
    email.click();
    message.click();
    state.click();
  });

  it("Save click", () => {
    render(<Panel />);
    const save = screen.getByTestId("save");
    save.click();
  });
});
