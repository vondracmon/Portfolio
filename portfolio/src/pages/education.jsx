import "../styles/Education.css";

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Science",
      school: "University of Technology",
      year: "2022 - Present",
      description: "Currently pursuing my degree in Information Technology with a focus on web development and software engineering."
    },
    {
      id: 2,
      degree: "High School Diploma",
      school: "Marcelo H. del Pilar National High School",
      year: "Change later once confirmed",
      description: "Completed high school education with emphasis on mathematics and computer science courses."
    },
    {
      id: 3,
      degree: "Web Development Certification",
      school: "Online Learning Platform",
      year: "2023",
      description: "Completed a comprehensive course on modern web development with React, JavaScript, and CSS."
    }
  ];

  return (
    <div className="education-container">
      <div className="education-header">
        <h1>Education</h1>
        <p>My academic background and learning journey</p>
      </div>
      <div className="education-timeline">
        {education.map((item) => (
          <div key={item.id} className="education-item">
            <h3>{item.degree}</h3>
            <div className="school">{item.school}</div>
            <div className="year">{item.year}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}