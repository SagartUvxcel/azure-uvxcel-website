import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdLineStyle, MdOutlineDevices } from "react-icons/md";

const Features = () => {
  return (
    <section id="features">
      <div className="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-1 ">
              <div className="features-middle">
                <h1 className="fw-bold primary-color-heading reveal fade-bottom">
                  Our Special Features
                </h1>
                <p className="reveal fade-up">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquam, commodi laudantium? Qui modi culpa assumenda minus?
                </p>
              </div>
            </div>
            <div className="col-md-5 overflowHide">
              <div className="feature-img reveal fade-right">
                <img
                  src="https://www.socialbuzzing.co.uk/wp-content/uploads/2018/03/Seven-Characteristics-of-Highly-Effective-Digital-Marketing-Team.png"
                  alt="...."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid margin-top-up pb-5 overflowHide">
        <div className="row">
          <div className="col-sm-12 col-lg-10 offset-lg-1">
            <div className="row">
              <div className="col-sm-6 col-md-4">
                <div className="single-feature reveal fade-right">
                  <h4>Custom CSS Control</h4>
                  <p>
                    Our Developers easily combine visual design controls with
                    their own custom CSS. Our interface is simple yet not
                    limiting.
                  </p>
                  <div className="feature-icon">
                    <FaCss3Alt />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="single-feature reveal fade-right">
                  <h4>Beautiful Design</h4>
                  <p>
                    Nice looking UI using Css, Javascript and modern
                    technologies such as Reactjs and it's dependencies.
                  </p>
                  <div className="feature-icon">
                    <AiOutlineCodeSandbox />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-5">
                <div className="single-feature reveal fade-right">
                  <h4>Responsive Design</h4>
                  <p>
                    Building beautiful responsive websites is easy. We have full
                    control over how your website looks on mobile devices.
                  </p>
                  <div className="feature-icon">
                    <MdOutlineDevices />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-5">
                <div className="single-feature reveal fade-right">
                  <h4>Animations</h4>
                  <p>
                    Excellent animation using Javascript and libraries of
                    Reactjs. Perfect use of css by developers.
                  </p>
                  <div className="feature-icon">
                    <MdLineStyle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
