import React from "react";
import { NavLink } from "react-router-dom";
import { BsCashStack } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaUserPlus, FaClock } from "react-icons/fa";

const JobDescription = ({ currentJob }) => {
  return (
    <section className="card job-description-card shadow-sm">
      <div className="card-head p-3">
        <h5 className="card-title text-center-smallScreen">{currentJob.designation}</h5>
        <p>
          <MdLocationOn />
          <span className="mx-2">{currentJob.location}</span>
        </p>
        <p>
          <BsCashStack />
          <span className="mx-2">
            {currentJob.salary ? currentJob.salary : "Not Mentioned"}
          </span>
        </p>
        <NavLink className="btn primary-btn mt-2" to="/applyform">
          Apply now
        </NavLink>
      </div>
      <div className="card-body">
        <h5
          style={{ marginBottom: "0px" }}
          className="fw-bold primary-color-heading text-center-smallScreen"
        >
          Full Job Description
        </h5>
        <p className="card-text">
          <br />
          <span>{currentJob.desc}</span>
        </p>
        <p className="card-text">
          {"Experience: " + currentJob.experience + " Years"}
        </p>
        <p className="card-text">{"Job type: " + currentJob.type}</p>
        <p className="card-text">{"Skills: " + currentJob.skills}</p>
        <p className="card-text">{"Schedule: " + currentJob.shifts}</p>
        <span className="card-text">
          Benefits:
          <ul>
            <li>Cell phone reimbursement</li>
            <li>Internet reimbursement</li>
          </ul>
        </span>

        <span className="card-text">
          Eligibility:
          <ul>
            <li>
              Qualification:{" "}
              {currentJob.eligibility === undefined
                ? ""
                : currentJob.eligibility.qualification}
            </li>
            <li>
              Nationality:{" "}
              {currentJob.eligibility === undefined
                ? ""
                : currentJob.eligibility.nationality}
            </li>
          </ul>
        </span>
        <hr />
        <h5 className="fw-bold primary-color-heading text-center-smallScreen">Hiring Insights</h5>
        <p>
          <FaUserPlus /> Hiring{" "}
          {currentJob.positions > 1
            ? currentJob.positions + " candidates "
            : "1 candidate "}
          for this role
        </p>
        <p>
          <FaClock /> Urgently hiring
        </p>
      </div>
    </section>
  );
};

export default JobDescription;
