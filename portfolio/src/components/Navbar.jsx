import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
        {isHome ? (
          "JML"
        ) : (
          <div className="logo-image"></div>
        )}
      </Link>
      
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        {!isHome && <li><Link to="/" onClick={() => setIsOpen(false)}>About</Link></li>}
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/education" onClick={() => setIsOpen(false)}>Education</Link></li>
        <li><Link to="/contacts" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}