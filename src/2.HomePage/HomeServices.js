import React from "react";
import { services } from "../4.Services/Data";
import { NavLink } from "react-router-dom";

const HomeServices = () => {
  return (
    <section className="container home-services ">
      <h1 className="primary-color-heading fw-bold text-center-smallScreen reveal fade-bottom">
        Our services
      </h1>
      <div className="row ">
        {services.slice(0, 6).map((service) => {
          return (
            <div
              className="col-lg-4 col-md-6 reveal fade-up"
              key={service.title}
            >
              <div className="row my-4">
                <div className="col-4">
                  <img src={service.img} className="card-img-top" alt="..." />
                </div>
                <div className="col-8" style={{ padding: "0", margin: "0" }}>
                  <div className="card-body">
                    <h6 className="card-title primary-color-heading">
                      {service.title}
                    </h6>
                    <p className="card-text">{service.parag}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center mt-4 reveal fade-up">
        <NavLink to="/services" className="btn primary-btn">
          More services
        </NavLink>
      </div>
    </section>
  );
};

export default HomeServices;
