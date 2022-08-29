import React from "react";
import { Link } from "react-router-dom";

const ResouceHome = () => {
  return (
    <div className="container resource-home-container">
      <h1>Resource & Download</h1>
      <div className="main-content">
        <ul>
          <li>
            <p>
              <Link className="resource-link" to="/resources/links">
                Links
              </Link>
            </p>
          </li>
          <li>
            <Link className="resource-link" to="/resources/policy">
              Policy Documents
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="/resources/formats">
              Formats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResouceHome;
