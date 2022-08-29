import React, { useContext, useEffect } from "react";
import { ImUpload3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { resourceData } from "../../App";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
// import file from "../../doc/1660014938578.pdf";

const HolidayCalender = () => {
  const { resource, getResources } = useContext(resourceData);
  useEffect(() => {
    getResources("holiday");
  });
  return (
    <>
      <div className="resource-home-container">
        <h1>Policy Documents</h1>
        <div className="main-content">
          <div className="button-container">
            <button>
              <Link to="/resources/create-form/holiday">
                <ImUpload3 className="upload-button" />
              </Link>
            </button>
            <button>
              <RiDeleteBin6Line className="del-button" />
            </button>
          </div>

          <ul>
            {resource &&
              resource.map((holiday) => {
                return (
                  <li key={holiday.doc.filename}>
                    <Link className="resource-link" to="">
                      uvXcel Holiday calender {holiday.name}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
      <div className="outer-pdf-container">
        <div class="pdf-container">
          <div class="pdf-header">
            <div class="left-pdf-header">
              <p>uvXcel Holiday calender 2022</p>
            </div>
            <div class="right-pdf-header">
              <button>close</button>
            </div>
          </div>

          <iframe
          title="pdf-title"
            src="../../doc/1660015133096.pdf#toolbar=0"
            width="100%"
            height="100%"
          ></iframe>
          {/* <iframe
            src="../../doc/1660014938578.pdf#toolbar=0"
            width="100%"
          ></iframe> */}
          {/* <div className="main-pdf-div">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              <Viewer fileUrl={file} />
            </Worker>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HolidayCalender;
