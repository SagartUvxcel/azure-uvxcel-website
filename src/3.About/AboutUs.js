import React from "react";
import VisionMission from "./VisionMission";
import CustomersSection from "./CustomersSection";
import CurrentEngagement from "./CurrentEngagement";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <section className="about padding-and-height-for-main-container">
      <h1 className="primary-color-heading mb-4 text-center fw-bold active fade-in">
        About Us
      </h1>
      <div className="container">
        <div className="row about-image ">
          <h2 className="mb-4 fw-bold primary-color-heading text-center-smallScreen active fade-left">
            Company Overview
          </h2>
          <div className="about-text active fade-up">
            <p>
              <strong>uvXcel</strong> is contradictorily a startup that has been
              set up by a group of like minded friends with collective
              professional experience of over a century (About 140 years and
              counting) in various domains and computer science technologies.
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
            <p>
              The wide variety of expertise ranging from Infrastructure
              Services, Business Intelligence, Data Architecture & Enterprise
              Applications, eCommerce, eLearning, Mobile Applications, AI & ML
              and IoT simply implies that uvXcel has a lot to offer under one
              umbrella.
            </p>
            <p>
              We aim to emerge as the preferred technology partner for our
              clients/ businesses, by powering them through innovative focused
              solutions for their real life problems with the right blend of
              time, cost and quality that will assure the projected growth.
            </p>
            <p>
              We strongly believe that the right partnership and collaboration
              lays the foundation for sustained growth and excellence, thus
              United We Excel.
            </p>
          </div>
        </div>
      </div>
      <VisionMission />
      <CurrentEngagement />
      <CustomersSection />
      <OurTeam />
    </section>
  );
};

export default AboutUs;
