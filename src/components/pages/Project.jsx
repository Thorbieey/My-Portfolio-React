import React from 'react'
import "../css/project.css";

const Project = ({ id, title, description, tags, gif, repoURL, appURL}) => {
    return (
        <div id={`Project-${id+1}`} className="col-lg-5">
            <div className="card custom-card">
                <img src={require(`../images/${gif}.gif`)} className="card-img custom-card-img" alt="project demo"></img>
                <div className="card-img-overlay custom-card-img-overlay">
                    <h5 className="card-title mb-0">{title}</h5>
                    <p className="card-text custom-card-text">{tags}</p>
                </div>
                <div className= "project-description large-card">
                <p className='description'>{description}</p>
                    <div className="url-btns">
                        <a type="button" className="btn urlBtn" href={repoURL} target="_blank" rel="noreferrer">Github Repo</a>
                        <a type="button" className="btn urlBtn" href={appURL} target="_blank" rel="noreferrer">Deployed Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;