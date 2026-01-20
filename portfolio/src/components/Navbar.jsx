import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Landing</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
      </ul>
    </nav>
  );
}