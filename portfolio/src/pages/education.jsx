import { useState } from "react";
import "../styles/Education.css";
import WEBCert from "../assets/images/WEBCert.PNG";
import JavaScriptCert from "../assets/images/JavaScriptFCC cert.PNG";

export default function Education() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science",
      school: "Bulacan State University - Meneses Campus",
      year: "2022 - Present",
      description: "Currently pursuing my degree in Information Technology with a focus on web development and software engineering.",
      image: null
    },
    {
      id: 2,
      degree: "High School Diploma",
      school: "Marcelo H. del Pilar National High School",
      year: "Change later once confirmed",
      description: "Completed high school education with emphasis on mathematics and computer science courses.",
      image: null
    },
    {
      id: 3,
      degree: "Web Development Certification",
      school: "FreeCodeCamp Online Courses",
      year: "2025",
      description: "Completed a comprehensive course on modern web development with HTML and CSS.",
      image: WEBCert
    },
    {
      id: 4,
      degree: "JavaScript Certification",
      school: "FreeCodeCamp Online Courses",
      year: "2025",
      description: "Completed a comprehensive course on modern web development with JavaScript.",
      image: JavaScriptCert
    }
  ];

  const handleEducationClick = (item) => {
    if (item.image) {
      setSelectedCertificate(item);
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="education-container">
      <div className="education-header">
        <h1>Education</h1>
        <p>My academic background and learning journey</p>
      </div>
      <div className="education-timeline">
        {education.map((item) => (
          <div
            key={item.id}
            className={`education-item ${item.image ? "clickable" : ""}`}
            onClick={() => handleEducationClick(item)}
          >
            <h3>{item.degree}</h3>
            <div className="school">{item.school}</div>
            <div className="year">{item.year}</div>
            <p>{item.description}</p>
            {item.image && <div className="click-hint">Click to view certificate</div>}
          </div>
        ))}
      </div>

      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedCertificate.image} alt={selectedCertificate.degree} />
          </div>
        </div>
      )}
    </div>
  );
}