import "../styles/Projects.css";
import profilePic from "../assets/images/pfp.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description: "This website portfolio showcases my education, projects, and contact information as a web developer.",
      image: profilePic,
      projectUrl: "https://github.com/vondracmon/Portfolio",
      tech: ["React", "CSS", "JavaScript", "Node.js"],
      tooltip: "Click to visit the github repository (Currently private)"
    },
    {
      id: 2,
      title: "Web Chronicles",
      description: "A windows desktop and android application game that enhances your web development understanding and skills.",
      image: null,
      projectUrl: "https://github.com/vondracmon/Web-Chronicles",
      tech: ["GDScript", "Godot", "Blender"],
      tooltip: "Click to visit the github repository"
    },
    {
      id: 3,
      title: "Web Chronicles Admin Website",
      description: "An admin-only web application for Web Chronicles designed to allow teachers to monitor student performance and learning progress through a centralized dashboard.",
      image: null,
      projectUrl: "https://github.com/vondracmon/Web-Chronicles-Admin-Website",
      tech: ["HTML", "Firebase", "CSS"],
      tooltip: "Click to visit the github repository"
    },
    {
      id: 4,
      title: "CampusGo",
      description: "An Android app for real-time classroom availability tracking and management using Firebase. Designed for campus staff and students to view or update room status instantly.",
      image: null,
      projectUrl: "https://github.com/vondracmon/CampusGo",
      tech: ["Android", "Firebase", "Java"],
      tooltip: "Click to visit the github repository"
    }
  ];

  const handleProjectClick = (projectUrl) => {
    if (projectUrl) {
      window.open(projectUrl, "_blank");
    }
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the innovative projects I've worked on</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${project.projectUrl ? "clickable" : ""}`}
            onClick={() => handleProjectClick(project.projectUrl)}
            title={project.tooltip}
          >
            <div className="project-header">
              <div className="project-content">
                <h3>{project.title}</h3>
              </div>
              {project.image && (
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            {project.projectUrl && (
              <div className="project-link-hint">
                <span>→ View on GitHub</span>
              </div>
            )}
            <div className="tooltip">{project.tooltip}</div>
          </div>
        ))}
      </div>
    </div>
  );
}