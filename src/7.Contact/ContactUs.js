import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import IndiaAddress from "./IndiaAddress";
import MalaysiaAddress from "./MalaysiaAddress";
import { BsEnvelope, BsTelephone, BsChevronDown } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

const ContactUs = () => {
  const toggleExpandArrow = () => {
    if (
      document
        .querySelector(".office-address-link-card-1")
        .getAttribute("aria-expanded") === "true"
    ) {
      document.querySelector(".expand-arrow-1").classList.add("rotate-180");
    } else {
      document.querySelector(".expand-arrow-1").classList.remove("rotate-180");
    }
    if (
      document
        .querySelector(".office-address-link-card-2")
        .getAttribute("aria-expanded") === "true"
    ) {
      document.querySelector(".expand-arrow-2").classList.add("rotate-180");
    } else {
      document.querySelector(".expand-arrow-2").classList.remove("rotate-180");
    }
  };

  useEffect(() => {
    toggleExpandArrow();
  });

  return (
    <section className="contact padding-and-height-for-main-container">
      <div className="container">
        <div className="text-center ">
          <h5 className="text-uppercase primary-color-heading active fade-bottom">
            Let's Start a Conversation
          </h5>
          <h1 className="fw-bold primary-color-heading active fade-in">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-md-5 mt-4 justify-content-evenly ">
          <div className="col-lg-5 col-md-5 mt-1 active fade-left">
            <IndiaAddress
              toggleExpandArrow={toggleExpandArrow}
              BsEnvelope={BsEnvelope}
              BsTelephone={BsTelephone}
              BsChevronDown={BsChevronDown}
              HiOutlineLocationMarker={HiOutlineLocationMarker}
            />
            <MalaysiaAddress
              toggleExpandArrow={toggleExpandArrow}
              BsEnvelope={BsEnvelope}
              BsTelephone={BsTelephone}
              BsChevronDown={BsChevronDown}
              HiOutlineLocationMarker={HiOutlineLocationMarker}
            />
          </div>
          <div className="col-lg-5 col-md-6 my-md-0 my-5 column2 active fade-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
