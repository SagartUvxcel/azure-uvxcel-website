import React from "react";
import { Link } from "react-router-dom";
import { ImUpload3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";

const peoplePractice = () => {
  return (
    <div className="container resource-home-container">
      <h1>All version of people practice</h1>
      <div className="main-content">
        <div className="button-container">
          <button>
            <Link to="/resources/create-form/people-practice">
              <ImUpload3 className="upload-button" />
            </Link>
          </button>
          <button>
            <RiDeleteBin6Line className="del-button" />
          </button>
        </div>
        <ul>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 1.0.0
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 1.0.1
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 1.1.0
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 1.2.0
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 1.2.1
            </Link>
          </li>
          <li>
            <Link className="resource-link" to="">
              uvXcel People practice 2.0.0
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default peoplePractice;
