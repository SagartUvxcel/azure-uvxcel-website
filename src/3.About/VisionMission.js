import React from "react";
import { visionMissionData } from "./AboutUsData";
const animationFormat = ["fade-left", "fade-up", "fade-right"];

const VisionMission = () => {
  return (
    <section id="vision-mission">
      <div className="container py-5 ">
        <h2 className="mb-4 fw-bold primary-color-heading text-center-smallScreen reveal fade-bottom">
          Mission, Vision &amp; Values
        </h2>
        <div className="row d-flex justify-content-center overflowHide">
          {visionMissionData.map((data, index) => {
            return (
              <div
                className={`col-md-4 col-12 reveal ${animationFormat[index]}`}
                key={data.id}
              >
                <div className="card mb-4 mb-md-0">
                  <div className="card-img">
                    <img className="card-img-top" src={data.img} alt="...." />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title text-center text-capitalize">
                      {data.title}
                    </h4>
                    <p className="card-text">{data.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
