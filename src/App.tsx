import { useRef } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import Header from "./components/Header";
import ToolInfo from "./components/ToolInfo";
import Background from "./components/Background";

import "./css/App.css";
import "./css/pages/Projects.css";
import "./css/components/Header.css";

import toolInfo from "./utils/struc/toolInfo";
import Contact from "./pages/Contact";

function App(): JSX.Element {
  const references = {
    home: { name: "home", ref: useRef(null) },
    projects: { name: "projects", ref: useRef(null) },
    about: { name: "about", ref: useRef(null) },
    contact: { name: "contacts", ref: useRef(null) },
  };

  return (
    <div className="App">
      <Background />
      <Header references={references} />
      <Home reference={references.home.ref} />
      <Projects reference={references.projects.ref} />
      <About reference={references.about.ref} />
      <Contact reference={references.contact.ref} />
      <ToolInfo title="Technos" tools={toolInfo} />
    </div>
  );
}

export default App;
