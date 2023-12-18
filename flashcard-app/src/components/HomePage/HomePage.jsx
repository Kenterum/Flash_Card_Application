import React from 'react';
import './HomePage.css'
const HomePage = () => {
  const projectList = [
    { name: "MDMS(Java Project)", url: "https://github.com/Kenterum/Online_Movie_Database_Management_System" },
    { name: "Rate Mate(React)", url: "https://github.com/Kenterum/Rate_Mate" },
    { name: "Personal Digital Card(HTML,CSS)", url: "https://github.com/Kenterum/Personal_Digital_Card" },
  ];

  return (
    <div>
      <h1>Welcome to the Flash Card App!</h1>
      <p>This is a great place to start learning.</p>
      <h2>Developer's Portfolio</h2>
      <ul>
        {projectList.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
