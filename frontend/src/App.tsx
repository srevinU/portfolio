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
import { GetHeaderReferences } from "./utils/data/headerData";
import "./style/App.css";
import "./style/pages/Projects.css";
import "./style/components/header/web/Header.web.css";
import Login from "./pages/Login";
import Popin from "./components/Popin";
import useAppHooks from "./hooks/app";
import Reference from "./utils/tools/Reference";

// import "../public/favicon.ico";

const userInfos = User.getUserInfo();
const userLangage: LanguageT = userInfos.langage;

function App(): JSX.Element {
  // require("../public/assets/app.js");
  const [language, setLanguage] = useState<LanguageT>(userLangage);
  const references: Array<Reference> = GetHeaderReferences();
  const { handlePopin, popIn, appData } = useAppHooks();

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
                <Home
                  reference={references[0]}
                  language={language}
                  isMobile={isMobile}
                  homeData={appData.home}
                />
                <Projects
                  reference={references[1]}
                  language={language}
                  isMobile={isMobile}
                  projectsData={appData.projects}
                />
                <About
                  reference={references[2]}
                  language={language}
                  isMobile={isMobile}
                  aboutData={appData.about}
                  experienceData={appData.experiences}
                />
                <Contact
                  reference={references[3]}
                  language={language}
                  isMobile={isMobile}
                  handlePopin={handlePopin}
                />
                <ToolInfo
                  title="Technos"
                  tools={toolInfo}
                  isMobile={isMobile}
                />
              </>
            }
          />
          <Route
            path="maintenance"
            element={<Maintenance language={language} />}
          />
          <Route path="login" element={<Login handlePopin={handlePopin} />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Popin popInData={popIn} isMobile={isMobile} />
    </div>
  );
}

export default App;
