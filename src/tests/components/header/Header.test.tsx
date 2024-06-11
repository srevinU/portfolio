import { render, screen } from "@testing-library/react";
import Header from "../../../components/header/Header";
import { ReferencesT, SocialNetworkT } from "../../../utils/types/Header";
import Reference from "../../../utils/tools/Reference";
import languages from "../../../utils/data/languages";
import { socialNetworks } from "../../../utils/data/headerData";
import { LanguageT } from "../../../utils/types/general";

describe("Header", () => {
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
    languages.forEach((language: { name: LanguageT; key: string }) => {
      render(
        <Header
          references={references}
          language={language.name}
          setLanguage={useStateMock}
        />,
      );
    });
  });

  it("Menu references present", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );
    for (const reference in references) {
      expect(screen.getByTestId(reference)).toBeInTheDocument();
    }
  });

  it("Menu references clicked scrool", () => {
    window.scrollTo = jest.fn();
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );

    for (const reference in references) {
      const item = screen.getByTestId(reference);
      item.click();
    }
  });

  it("Language references present", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );
    languages.forEach((language: { name: LanguageT; key: string }) => {
      expect(screen.getByTestId(language.name)).toBeInTheDocument();
    });
  });

  it("Socials icons present", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );
    socialNetworks.forEach((social: SocialNetworkT) => {
      expect(screen.getByTestId(social.dataTestId)).toBeInTheDocument();
    });
  });

  it("Socials icons clicked open new tab", () => {
    window.open = jest.fn();
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
      />,
    );
    socialNetworks.forEach((social: SocialNetworkT) => {
      const item = screen.getByTestId(social.dataTestId);
      item.click();
    });
  });
});
