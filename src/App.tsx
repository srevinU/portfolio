import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import ToolInfo from "./components/ToolInfo";
import MessagesDisplayer from "./components/MessagesDisplayer";
import User from "./utils/tools/User";
import toolInfo from "./utils/data/toolInfo";
import { LanguageT } from "./utils/types/general";
import { ReferencesT } from "./utils/types/Header";
import { GetHeaderReferences } from "./utils/data/headerData";
import "./style/App.css";
import "./style/pages/Projects.css";
import "./style/components/Header.css";

const userInfos = User.getUserInfo();
const userLangage: LanguageT = userInfos.langage;

function App(): JSX.Element {
  const [language, setLanguage] = useState<LanguageT>(userLangage);
  const references: ReferencesT = GetHeaderReferences();

  return (
    <div className="App">
      <Header
        references={references}
        language={language}
        setLanguage={setLanguage}
      />
      <MessagesDisplayer language={language} />
      <Home reference={references.home} language={language} />
      <Projects reference={references.projects} language={language} />
      <About reference={references.about} language={language} />
      <Contact reference={references.contact} language={language} />
      <ToolInfo title="Technos" tools={toolInfo} />
    </div>
  );
}

export default App;
