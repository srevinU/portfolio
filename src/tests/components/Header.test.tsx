import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/Header";
import { ReferencesT } from "../../utils/types/Header";
import Reference from "../../utils/tools/Reference";

describe("ContactForm", () => {
  const references: ReferencesT = {
    home: new Reference(
      "home",
      { FR: "home", EN: "acceuil" },
      { current: document.createElement("div") },
    ),
    projects: new Reference(
      "projects",
      { FR: "projets", EN: "projects" },
      { current: document.createElement("div") },
    ),
    about: new Reference(
      "about",
      { FR: "About", EN: "À propos" },
      { current: document.createElement("div") },
    ),
    contact: new Reference(
      "contact",
      { FR: "contact", EN: "contact" },
      { current: document.createElement("div") },
    ),
  };

  it("Renders correctly", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );
  });
});
