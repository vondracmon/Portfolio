import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/vondracmon", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "🌐" },
    { name: "Twitter", url: "https://twitter.com", icon: "𝕏"},
    { name: "Email", url: "mailto:your.email@example.com", icon: "✉️" }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>JML</h3>
          <p style={{fontStyle: "italic"}}>"For every code is a story waiting to be told."</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-links">
            {socialLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Jm. All rights reserved. | For every code is a story waiting to be told</p>
      </div>
    </footer>
  );
}
