import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technology = technologies.map(technology => <span key={technology}>{technology}</span>)
  
  return (
    <div className="project-item" key={name}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technology}
      </div>
    </div>
  );
}

export default ProjectItem;
