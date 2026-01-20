import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Education from "./pages/education";
import Contacts from "./pages/contacts";
import sidebar from "./components/sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
    
  );
}

export default App;