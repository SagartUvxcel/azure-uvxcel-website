import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import aboutImg from "../images/home-about-img.png";

const AboutUsShort = () => {

  // const activateAnimation = () => {
  //   const winScroll = document.innerwidth;
  //   console.log(winScroll);
  // };

  // useEffect(() => {
  //   activateAnimation();
  // },[])

  return (
    <section className="container py-5 ">
      <h1 className="primary-color-heading fw-bold mb-4 text-center-smallScreen reveal fade-up">
        About us
      </h1>
      <div className="row overflowHide">
        <div className="col-lg-7 order-lg-1 order-2 mt-lg-0 mt-5 reveal fade-left">
          <div className="about-text home-about-text pe-lg-5">
            <p>
              uvXcel is contradictorily a startup that has been set up by a
              group of like minded friends with collective professional
              experience of over a century (About 140 years and counting) in
              various domains and computer science technologies.
            </p>
            <p>
              Each individual comes from similar culture, family background,
              academic qualification and more importantly withstrong trust,
              values, principles, ethics and ambitions.The core is to leverage
              the discrete yet associated experience to partner with our
              clients/ businesses to simplify their operations, provide advanced
              technology frameworks to make their business processes efficient,
              and enable them to self propel through smart cognitive digital
              solutions.
            </p>
            <div className="text-center-smallScreen">
              <NavLink to="/about" className="btn primary-btn mt-4">
                Read more
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-5 order-lg-2 order-1 reveal fade-right">
          <div className="home-about-img-div">
            <img
              src={aboutImg}
              alt="...."
              className="home-about-img img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsShort;
