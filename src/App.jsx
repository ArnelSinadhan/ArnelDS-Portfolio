import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/ParticlesComponent";
function App() {
  return (
    <Router>
      <ParticlesComponent className="particles" />
      <div className="app-content">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
