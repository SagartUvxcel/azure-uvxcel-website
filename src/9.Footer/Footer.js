import React from "react";
import { BsLinkedin, BsEnvelope, BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../images/footer-logo.png";

const Footer = () => {
  // Functions for address changes
  const onIndiaClick = () => {
    document
      .querySelector(".india-address")
      .classList.remove("address-display-none");
    document
      .querySelector(".office-1")
      .classList.add("border-and-color-visible");
    document
      .querySelector(".malaysia-address")
      .classList.add("address-display-none");
    document
      .querySelector(".office-2")
      .classList.remove("border-and-color-visible");
  };

  const onMalaysiaClick = () => {
    document
      .querySelector(".india-address")
      .classList.add("address-display-none");
    document
      .querySelector(".office-1")
      .classList.remove("border-and-color-visible");
    document
      .querySelector(".malaysia-address")
      .classList.remove("address-display-none");
    document
      .querySelector(".office-2")
      .classList.add("border-and-color-visible");
  };

  return (
    <footer className="container-fluid text-white">
      <div className="container">
        <div className="row justify-content-evenly pb-md-2 ">
          <div className="col-lg-3 col-md-3 col-8 footer-logo-div reveal fade-up">
            <div className="row mb-4">
              <div className="col-9">
                <img className="footer-logo" src={logo} alt="...." />
              </div>
            </div>

            <p>
              We aim to emerge as the Preferred technology partner for our
              client.
            </p>
          </div>
          <div className="col-lg-2 col-md-2 col-4 reveal fade-up">
            <h5>Explore</h5>
            <p>
              <Link className="explore-link" to="/">
                Home
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/about">
                About
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/careers">
                Careers
              </Link>
            </p>

            <p>
              <Link className="explore-link" to="/technologies">
                Technologies
              </Link>
            </p>
            <p>
              <Link className="explore-link" to="/resources">
                Resources
              </Link>
            </p>
          </div>
          <div className="col-lg-4 col-md-5 col-12 mt-4 mt-md-0 reveal fade-up">
            <h5>Contact Info</h5>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-6 col-lg-4">
                    <h6
                      className="office-1 border-and-color-visible"
                      onClick={onIndiaClick}
                    >
                      India office
                    </h6>
                  </div>
                  <div className="col-6 col-lg-5">
                    <h6 className="office-2" onClick={onMalaysiaClick}>
                      Malaysia office
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-12 india-address mt-2">
                <div className="row">
                  <div className="col-1">
                    <HiOutlineLocationMarker className="icons" />
                  </div>
                  <div className="col-10">
                    <p>
                      Unit No. 223,Goodwill SquareMall, Dhanori, Pune,
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <BsEnvelope className="icons" />
                  </div>
                  <div className="col-10">
                    <p>marketing@uvxcel.com</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <BsTelephone className="icons" />
                  </div>
                  <div className="col-10">
                    <p>+91-20-67026259</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 malaysia-address address-display-none mt-2">
                <div className="row">
                  <div className="col-1">
                    <HiOutlineLocationMarker className="icons" />
                  </div>
                  <div className="col-10">
                    <p>
                      Level 33,Ilham Tower,No.8,Jalan Binjai,50450 Kuala
                      Lumpur,Malaysia.
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <BsEnvelope className="icons" />
                  </div>
                  <div className="col-10">
                    <p>marketing@uvxcel.com</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <BsTelephone className="icons" />
                  </div>
                  <div className="col-10">
                    <p>+60-12-200-0340</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-12 mt-4 mt-md-0 reveal fade-up">
            <h5>Follow</h5>
            <span>
              <a href="https://in.linkedin.com/company/uvxcel-it-solutions">
                <BsLinkedin color="white" className="icons" size={30} />
              </a>
            </span>
            {/* <span>
              <a href="/contact">
                <BsGithub color="white" className="icons mx-3" size={30} />
              </a>
            </span> */}
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <hr />
          <div className="col-lg-6 py-md-3">
            <p>Copyright © uvXcel Pvt. Ltd. All Rights Reserved</p>
          </div>
          <div className="col-lg-5 py-md-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
