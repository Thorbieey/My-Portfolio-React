import React from 'react'
import WeatherDashboard from '../images/weather-dashboard-demo.png'

const Project = ({ title, description, tags, gif, repoURL, appURL}) => {
    return (
        <div className="card-container">
            <div className="card custom-card">
                <img src={gif} className="card-img" alt="project demo"></img>
                <div className="card-img-overlay custom-card-img-overlay">
                    <h5 className="card-title mb-0">{title}</h5>
                    <p className="card-text custom-card-text">{tags}</p>
                </div>
                <p className= "project-description large-card">{description}</p>
            </div>
            <div>
                <button type="button" className="btn btn-primary" href={repoURL}  >Github Repo</button>
                <button type="button" className="btn btn-primary" href={appURL}>Deployed Link</button>
            </div>
        </div>
    );
};

export default Project;