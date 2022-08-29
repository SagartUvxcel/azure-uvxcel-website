import React from "react";
import { Link } from "react-router-dom";
import holidayCalender from "../../images/for holiday.png";
import peoplePractice from "../../images/for people practice.jpg";
import sow from "../../images/sow.jpg";
import { ImUpload3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
const AllFormates = () => {
  return (
    <div className="container resource-home-container">
      <h1>Formats</h1>
      <div className="main-content">
        <div className="button-container">
          <button>
            <Link to="/resources/create-form/format">
              <ImUpload3 className="upload-button" />
            </Link>
          </button>
          <button>
            <RiDeleteBin6Line className="del-button" />
          </button>
        </div>

        <div className="all-policy">
          <div className="policy-div">
            <div className="image-div">
              <img src={holidayCalender} alt="" />
            </div>
            <div className="text-div">
              <p>Email Signature</p>
            </div>
          </div>
          <div className="policy-div">
            <div className="image-div">
              <img src={peoplePractice} alt="" />
            </div>
            <div className="text-div">
              <p>PPT Format For Clients​</p>
            </div>
          </div>
          <div className="policy-div">
            <div className="image-div">
              <img src={sow} alt="" />
            </div>
            <div className="text-div">
              <p>PPT Format For Internal Customers</p>
            </div>
          </div>
          <div className="policy-div">
            <div className="image-div">
              <img src={sow} alt="" />
            </div>
            <div className="text-div">
              <p>Holiday Calendar​</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFormates;
