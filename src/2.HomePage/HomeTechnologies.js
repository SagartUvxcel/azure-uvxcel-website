import React from "react";
import { iconsData } from "../5.Technologies/iconsData";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const HomeTechnologies = () => {
  return (
    <section className="container home-technology-container py-5 ">
      <h1 className="primary-color-heading fw-bold mb-4 text-center-smallScreen reveal fade-up">
        Technologies
      </h1>
      <div className="row pt-3 ">
        {iconsData.slice(0, 5).map((data) => {
          return (
            <div
              className="col-lg-2 col-md-2 col-6 reveal fade-up"
              key={data.name}
            >
              <div className="card">
                <h5 className="card-title primary-color-heading px-2">
                  {data.name}
                </h5>
                <div className="home-technology-component">
                  <i className="icon-transition">{data.component}</i>
                </div>
              </div>
            </div>
          );
        })}
        <div className="col-lg-1 col-md-2 col-6 px-5 px-md-4 ">
          <div className="card home-technology-btn-div reveal fade-up">
            <NavLink to="technologies" className="btn primary-btn">
              <BsArrowRight size={24} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTechnologies;
