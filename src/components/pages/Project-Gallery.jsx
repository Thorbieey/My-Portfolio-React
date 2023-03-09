import React from "react";
import Project from "./Project";
import projectData from "../../projectData.json"

function ProjectGallery() {
  const projectList = projectData.map(project => <Project {...project} key={project.id} />)
  return (
    <div className="row project-container">
      <h1 className="page-header">Project Gallery</h1>
      <div
        className='projects-container'>
        {projectList}
      </div>
    </div>
  );
}

export default ProjectGallery;