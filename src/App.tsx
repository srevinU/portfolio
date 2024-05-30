import { createContext, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import ToolInfo from "./components/ToolInfo";
import Background from "./components/Background";
import "./style/App.css";
import "./style/pages/Projects.css";
import "./style/components/Header.css";
import toolInfo from "./utils/data/toolInfo";
import { LanguageT } from "./utils/types/general";
import { ReferencesT } from "./utils/types/Header";
import { GetHeaderReferences } from "./utils/data/HeaderData";

export const ContryContext = createContext({} as any);

function App(): JSX.Element {
  const [language, setLanguage] = useState<LanguageT>("EN");
  const references: ReferencesT = GetHeaderReferences();

  return (
    <div className="App">
      <Background />
      <ContryContext.Provider value={{ language, setLanguage }}>
        <Header {...references} />
        <Home reference={references.home.ref} />
        <Projects reference={references.projects.ref} />
        <About reference={references.about.ref} />
        <Contact reference={references.contact.ref} />
      </ContryContext.Provider>
      <ToolInfo title="Technos" tools={toolInfo} />
    </div>
  );
}

export default App;
