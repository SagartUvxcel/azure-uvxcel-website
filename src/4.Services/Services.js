import React from "react";
import { services } from "./Data";

const Services = () => {
  return (
    <section className="services padding-and-height-for-main-container py-5">
      <div className="container ">
        <h1 className="primary-color-heading text-center fw-bold text-center-smallScreen active fade-in">
          Our Services
        </h1>
        <div className="row ">
          {services.map((service) => (
            <div
              className="col-12 col-md-6 col-lg-4 active fade-up"
              key={service.title}
            >
              <div className="my-5">
                <div className="row">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
