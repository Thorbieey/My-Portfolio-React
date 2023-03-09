import React from 'react';
import { NavLink } from 'react-router-dom';
import CV from "./add-ons/TobiOlajide-WebDeveloper.pdf";
import "./css/navTabs.css";



function NavTabs() {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <h1 className="mainLogo" href="#">Tobi Olajide</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse nav-items customNavItems" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item customNavItem">
                    <NavLink
                        to="/My-Portfolio-React"
                        end
                        className={({ isActive }) =>
                          isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                        }
                      >
                        Home
                    </NavLink>
                  </li>
                  <li className="nav-item customNavItem">
                    <NavLink
                      to="/My-Portfolio-React/about"
                      className={({ isActive }) =>
                        isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                      }
                      >
                        About
                    </NavLink>
                  </li>
                  <li className="nav-item customNavItem">
                    <NavLink
                      to="/My-Portfolio-React/about/skills"
                      end
                      className={({ isActive }) =>
                        isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                      }
                    >
                      Skills
                    </NavLink>
                  </li>
                  <li className="nav-item customNavItem">
                    <NavLink
                      to="/My-Portfolio-React/project-gallery"
                      end
                      className={({ isActive }) =>
                        isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                      }
                    >
                      Project Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item customNavItem dropdown">
                    <NavLink
                      to="/My-Portfolio-React/contact"
                      end
                      className={({ isActive }) =>
                        isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item resumeNavItem">
                    <a className="nav-link resumeNavLink" href={CV} target="_blank" rel="noreferrer">View Resume</a>
                  </li>
               </ul>
             </div>
    </nav>


  );
}

export default NavTabs;
