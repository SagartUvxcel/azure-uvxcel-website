import React from "react";
import { employees } from "./AboutUsData";

const OurTeam = () => {
  return (
    <section className="container our-team py-5 ">
      <h2 className="fw-bold primary-color-heading text-center-smallScreen reveal fade-bottom">
        Our Team
      </h2>
      <div className="row ">
        {employees.map((person) => {
          return (
            <div
              className="col-custom-5 col-md-4 col-6 reveal fade-up"
              key={person.id}
            >
              <div className="card shadow-sm mt-4">
                <div className="img-holder">
                  <img
                    src={person.photo}
                    alt="..."
                    className="card-img-top employee-photo"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-text primary-color-heading text-capitalize">
                    {person.name}
                  </h5>
                  <p
                    className=" designationPara card-text fw-bold"
                    style={{ color: "var(--danger)" }}
                  >
                    {person.designation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
