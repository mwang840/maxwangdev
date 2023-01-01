import React from "react";
import {Link} from "react-router-dom";
import "./ViewNavbarModule.css";
// eslint-disable-next-line @typescript-eslint/ban-types
export const ViewNavbar: React.FC<{}> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to={'/aboutme'}>About Me</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to={'/languages'}>Languages</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/projects'}>
                    Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/contact'}>
                   Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
