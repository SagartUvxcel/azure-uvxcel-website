import React from "react";
import { iconsData } from "./iconsData";

const TechIcons = () => {
  return (
    <div className="container py-5 technology-details">
      <div className="row">
        {iconsData.map((data, index) => {
          return (
            <div
              className={`col-xl-3 col-md-6 fade-up ${
                index < 4 ? "active" : "reveal"
              }`}
              key={data.name}
            >
              <div className="card mt-4 shadow-sm p-3">
                <div className="card-body">
                  <h5 className="card-title primary-color-heading px-2">
                    {data.name}
                  </h5>

                  <i className="technology-icon">{data.component}</i>
                  <p className="mt-2">{data.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechIcons;
