import { render } from "@testing-library/react";
import AdminFrom from "../../../components/admin/AdminForm";
import useAdminHooks from "../../../hooks/admin";
import { AdminForm } from "../../../utils/entities/AdminForm";

// Mock the useAdminHooks hook
jest.mock("../../../hooks/admin");
describe("AdminFrom", () => {
  beforeEach(() => {
    // Mock the return value of useAdminHooks
    (useAdminHooks as jest.Mock).mockReturnValue({
      adminFormContent: new AdminForm(),
      homeConfigHooksI: { handleHomeDataChange: jest.fn() },
      projectHooksI: {
        handleProjectDataChangeWithLanguage: jest.fn(),
        handleProjectDataChange: jest.fn(),
        handleProjectStatusChange: jest.fn(),
        handleProjectTechnoClicked: jest.fn(),
      },
      projectsConfigHooksI: {
        handleAddProject: jest.fn(),
        handleDeleteProject: jest.fn(),
      },
      aboutConfigHooksI: {
        handleAboutDataOnChange: jest.fn(),
        handleAboutTechnoClicked: jest.fn(),
        handleAboutDevLanguageClicked: jest.fn(),
        handleDisciplinesSelected: jest.fn(),
      },
      buttonConfigHooksI: { handleSubmit: jest.fn(), handleReset: jest.fn() },
    });
  });

  it("Renders correctly", async () => {
    render(<AdminFrom />);
  });
});
