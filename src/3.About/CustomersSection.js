import React from "react";
import logo1 from "../images/smartrr.png";
import logo2 from "../images/bestol.png";
import logo3 from "../images/uttr.jpg";
import logo4 from "../images/Reonomy.jpg";
import logo5 from "../images/datagridzlogo2-1.png";
import logo6 from "../images/nortek.png";

const CustomersSection = () => {

  return (
    <section className="container customers pt-5 reveal fade-up">
      <h2 className="fw-bold mb-4 primary-color-heading text-center-smallScreen">
        Our Customers
      </h2>
      
      <section className="slide-option">
        <div id="infinite" className="highway-slider">
          <div className="container highway-barrier">
            <ul className="highway-lane">
              <li className="highway-car"> <img src={logo1} alt="..." /></li>
              <li className="highway-car"> <img src={logo2} alt="..." /></li>
              <li className="highway-car"> <img src={logo3} alt="..." /></li>
              <li className="highway-car"> <img src={logo4} alt="..." /></li>
              <li className="highway-car"> <img src={logo5} alt="..." /></li>
              <li className="highway-car"> <img src={logo6} alt="..." /></li>

              <li className="highway-car"> <img src={logo1} alt="..." /></li>
              <li className="highway-car"> <img src={logo2} alt="..." /></li>
              <li className="highway-car"> <img src={logo3} alt="..." /></li>
              <li className="highway-car"> <img src={logo4} alt="..." /></li>
              <li className="highway-car"> <img src={logo5} alt="..." /></li>
              <li className="highway-car"> <img src={logo6} alt="..." /></li>

              <li className="highway-car"> <img src={logo1} alt="..." /></li>
              <li className="highway-car"> <img src={logo2} alt="..." /></li>
              <li className="highway-car"> <img src={logo3} alt="..." /></li>
              <li className="highway-car"> <img src={logo4} alt="..." /></li>
              <li className="highway-car"> <img src={logo5} alt="..." /></li>
              <li className="highway-car"> <img src={logo6} alt="..." /></li>

              <li className="highway-car"> <img src={logo1} alt="..." /></li>
              <li className="highway-car"> <img src={logo2} alt="..." /></li>
              <li className="highway-car"> <img src={logo3} alt="..." /></li>
              <li className="highway-car"> <img src={logo4} alt="..." /></li>
              <li className="highway-car"> <img src={logo5} alt="..." /></li>
              <li className="highway-car"> <img src={logo6} alt="..." /></li>

            </ul>
          </div>
        </div>
      </section>


    </section>
  );
};

export default CustomersSection;
