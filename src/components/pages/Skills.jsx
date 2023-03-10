import React from "react";
import "../css/skills.css";

function Skills() {
  return (
    <div className="row skills-container">
      <h1 className="page-header">Skills</h1>
      <ul className="col-8 col-sm-6 list-group custom-list-group">
        <li className="list-group-item skill ">
          HTML
          <span className="badge badge-primary custom-badge badge-pill">Intermediate</span>
        </li>
        <li className="list-group-item skill ">
          CSS
          <span className="badge badge-primary custom-badge badge-pill">Intermediate</span>
        </li>
        <li className="list-group-item skill ">
          Git
          <span className="badge badge-primary custom-badge badge-pill">Intermediate</span>
        </li>
        <li className="list-group-item skill ">
          JavaScript
          <span className="badge badge-primary custom-badge badge-pill">Intermediate</span>
        </li>
        <li className="list-group-item skill ">
          Node
          <span className="badge badge-primary custom-badge badge-pill">Beginner</span>
        </li>
        <li className="list-group-item skill ">
          React
          <span className="badge badge-primary custom-badge badge-pill">Novice</span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;