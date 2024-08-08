import { render, screen } from "@testing-library/react";
import Header from "../../../components/header/Header";
import { SocialNetworkT } from "../../../utils/types/Header";
import Reference from "../../../utils/tools/Reference";
import languages from "../../../utils/data/languages";
import { socialNetworks } from "../../../utils/data/headerData";
import { LanguageT } from "../../../utils/types/general";

describe("Header", () => {
  const references: Array<Reference> = [
    new Reference(
      { FR: "home", EN: "acceuil" },
      { current: document.createElement("div") },
    ),
    new Reference(
      { FR: "projets", EN: "projects" },
      { current: document.createElement("div") },
    ),
    new Reference(
      { FR: "About", EN: "À propos" },
      { current: document.createElement("div") },
    ),
    new Reference(
      { FR: "contact", EN: "contact" },
      { current: document.createElement("div") },
    ),
  ];

  it("Renders correctly", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    languages.forEach((language: { name: LanguageT; key: string }) => {
      render(
        <Header
          references={references}
          language={language.name}
          setLanguage={useStateMock}
          isMobile={false}
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
        isMobile={false}
      />,
    );

    references.forEach((reference) => {
      expect(screen.getByTestId(reference.uuid)).toBeInTheDocument();
    });
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
        isMobile={false}
      />,
    );

    references.forEach((reference) => {
      const item = screen.getByTestId(reference.uuid);
      item.click();
    });
  });

  it("Language references present", () => {
    const setLanguageMock = jest.fn();
    const useStateMock = (language: any) => [language, setLanguageMock];
    render(
      <Header
        references={references}
        language={"EN"}
        setLanguage={useStateMock}
        isMobile={false}
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
        isMobile={false}
      />,
    );
    socialNetworks.forEach((social: SocialNetworkT) => {
      expect(screen.getByTestId(social.uuid)).toBeInTheDocument();
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
        isMobile={false}
      />,
    );
    socialNetworks.forEach((social: SocialNetworkT) => {
      const item = screen.getByTestId(social.uuid);
      item.click();
    });
  });
});
