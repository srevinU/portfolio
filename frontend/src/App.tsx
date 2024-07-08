import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Maintenance from "./pages/Maintenance";
import Header from "./components/header/Header";
import ToolInfo from "./components/ToolInfo";
import MessagesDisplayer from "./components/MessagesDisplayer";
import User from "./utils/tools/User";
import { isMobile } from "react-device-detect";
import toolInfo from "./utils/data/toolInfo";
import { messagesDisplay } from "./utils/data/messageDisplay";
import { LanguageT } from "./utils/types/general";
import { ReferencesT } from "./utils/types/Header";
import { GetHeaderReferences } from "./utils/data/headerData";
import "./style/App.css";
import "./style/pages/Projects.css";
import "./style/components/web/Header.web.css";
import Login from "./pages/Login";

const userInfos = User.getUserInfo();
const userLangage: LanguageT = userInfos.langage;

function App(): JSX.Element {
  const [language, setLanguage] = useState<LanguageT>(userLangage);
  const references: ReferencesT = GetHeaderReferences();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  references={references}
                  language={language}
                  setLanguage={setLanguage}
                  isMobile={isMobile}
                />
                <MessagesDisplayer
                  language={language}
                  messagesDisplay={messagesDisplay}
                />
                <Home reference={references.home} language={language} />
                <Projects reference={references.projects} language={language} />
                <About reference={references.about} language={language} />
                <Contact reference={references.contact} language={language} />
                <ToolInfo title="Technos" tools={toolInfo} />
              </>
            }
          />
          <Route
            path="maintenance"
            element={<Maintenance language={language} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
