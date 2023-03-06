import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  nav: {
    background: "#E9E8E8",
    alignItems: "center"
  },
  mainLogo: {
    fontSize: "3rem",
    fontWeight: "600",
    padding: "0 5px 0 20px",
    color: "#E9E8E8",
    backgroundColor: "#913175"
  },
  customNavItems: {
    marginLeft: "auto",
    justifyContent: "end"
  },
  customNavItem: {
    fontSize: "1.5rem",
    fontWeight: "500",
    padding: "2px"
  },
  customNavLink: {
    color: "#913175",
  }
};

function NavTabs() {
  return (
    <nav style={styles.nav} className="navbar navbar-expand-lg custom-nav">
      <h1 style={styles.mainLogo} className="mainLogo" href="#">Tobi Olajide</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse nav-items " id="navbarSupportedContent">
               <ul style={styles.customNavItems} className="navbar-nav mr-auto customNavItems">
                  <li style={styles.customNavItem} className="nav-item customNavItem">
                    <NavLink
                        to="/My-Portfolio-React"
                        end
                        style={styles.customNavLink}
                        className={({ isActive }) =>
                          isActive ? 'nav-link customNavLink active' : 'nav-link customNavLink'
                        }
                      >
                        Home
                    </NavLink>
                  </li>
                  <li style={styles.customNavItem} className="nav-item customNavItem">
                    <NavLink
                      to="/My-Portfolio-React/about"
                      style={styles.customNavLink}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                      >
                        Work
                    </NavLink>
                  </li>
                  <li style={styles.customNavItem} className="nav-item customNavItem">
                    <NavLink
                      to="/My-Portfolio-React/blog"
                      style={styles.customNavLink}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Skills
                    </NavLink>
                  </li>
                  <li style={styles.customNavItem} className="nav-item customNavItem dropdown">
                    <NavLink
                      to="/My-Portfolio-React/contact"
                      style={styles.customNavLink}
                      end
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Contact
                    </NavLink>
                   <div className="dropdown-menu custom-dropdown-menu" aria-labelledby="navbarDropdown">
                     <a className="dropdown-item custom-dropdown-item" href="https:github.com/Thorbieey">GitHub</a>
                     <div className="dropdown-divider"></div>
                     <a className="dropdown-item custom-dropdown-item" href="https:linkedin.com/in/tobi-olajide-774379195">LinkedIn</a>
                     <div className="dropdown-divider"></div>
                     <a className="dropdown-item custom-dropdown-item" href="#">Twitter</a>
                   </div>
                  </li>
                  <li style={styles.customNavItem} className="nav-item customNavItem">
                    <a  style={styles.customNavLink} className="nav-link  customNavLink btn btn-outline-tertiary btn-sm" href="./add-ons/resume-front-end.pdf">View Resume</a>
                  </li>
               </ul>
             </div>
    </nav>


  );
}

export default NavTabs;
