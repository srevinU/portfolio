import "./css/App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Maintenance from "./pages/Maintenance";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="maintenance" element={<Maintenance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
