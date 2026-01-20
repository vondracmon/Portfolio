import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Web Chronicles",
      description: "A windows desktop and android application game that enhances your web development understanding and skills."
    },
    {
      id: 2,
      title: "Nothing yet",
      description: "A React application for managing daily tasks with features like add, edit, delete, and local storage persistence."
    },
    {
      id: 3,
      title: " Nothing yet",
      description: "A responsive weather application that fetches real-time weather data using an external API."
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are some of the projects I've worked on</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}