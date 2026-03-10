import "../styles/Landing.css";

const Landing = () => {
  const skills = [
    { category: "Frontend", items: ["React", "HTML", "CSS"] },
    { category: "Backend", items: ["JavaScript", "GDScript", "Firebase"] },
    { category: "Tools", items: ["Git", "VS Code", "Android Studio", "Godot"] }
  ];

  return (
    <div className="landing-container">
      <div className="pic-wrapper">
        <div className="pic"></div>
      </div>
      <h1 className="landing-title">Welcome to My Portfolio</h1>
      <p className="landing-text">
        Hi! I'm Jm, a passionate IT student and aspiring developer, I mainly focus on backend development. 
        I'm dedicated to creating beautiful and functional web applications. 
        This is my portfolio where I showcase my projects, skills, and educational background. 
        Feel free to explore and get to know more about me!
      </p>
      
      <div className="skills-section">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-group">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <a href="/projects" className="cta-button">View My Projects</a>
        <a href="/contacts" className="cta-button cta-button-secondary">Get In Touch</a>
      </div>
    </div>
  );
};

export default Landing;
