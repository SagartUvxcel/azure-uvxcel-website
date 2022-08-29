import React from "react";
import { engagementData } from "./AboutUsData";

const CurrentEngagement = () => {
  return (
    <section className="current-engagement">
      <div className="container ">
        <h2 className="primary-color-heading mb-4 fw-bold text-center-smallScreen reveal fade-bottom">
          Current Engagement
        </h2>
        <div className="row ">
          {engagementData.map((data) => {
            return (
              <div
                className="col-md-6 col-lg-4 mb-4 reveal fade-up"
                key={data.id}
              >
                <div className="info-card text-center">
                  <div className="circle-icon">
                    <span>{data.icon}</span>
                  </div>
                  <h5 className="py-3 primary-color-heading text-uppercase">
                    {data.title}
                  </h5>
                  <p>{data.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentEngagement;
