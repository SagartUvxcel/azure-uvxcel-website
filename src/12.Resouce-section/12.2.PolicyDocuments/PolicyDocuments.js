import React from "react";
import holidayCalender from "../../images/for holiday.png";
import peoplePractice from "../../images/for people practice.jpg";
import sow from "../../images/sow.jpg";
import { Link } from "react-router-dom";

const PolicyDocuments = () => {
  return (
    <div className="container resource-home-container">
      <h1>Policy Documents</h1>
      <div className="main-content">
        <div className="all-policy">
          <Link className="resource-link" to="/resources/policy/holiday-cal">
            <div className="policy-div">
              <div className="image-div">
                <img src={holidayCalender} alt="" />
              </div>
              <div className="text-div">
                <p>Holiday calender</p>
              </div>
            </div>
          </Link>
          <Link className="resource-link" to="/resources/policy/practice">
            <div className="policy-div">
              <div className="image-div">
                <img src={peoplePractice} alt="" />
              </div>
              <div className="text-div">
                <p>People Practice</p>
              </div>
            </div>
          </Link>

          <div className="policy-div">
            <div className="image-div">
              <img src={sow} alt="" />
            </div>
            <div className="text-div">
              <p>SOW Format</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyDocuments;
