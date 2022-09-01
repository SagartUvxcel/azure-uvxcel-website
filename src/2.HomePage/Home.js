import React from "react";
import img1 from "../images/Slideimg1.jpg";
import img2 from "../images/Slideimg2.jpg";
import img3 from "../images/Slideimg3.jpg";
import Features from "./Features";
import HomeAboutUs from "./HomeAboutUs";
import HomeServices from "./HomeServices";
import HomeTechnologies from "./HomeTechnologies";
import CustomersSection from "../3.About/CustomersSection";


const Home = () => {
  return (
    <>
      <section className="home">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active indicators"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              className="indicators"
              aria-current="true"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              className="indicators"
              aria-current="true"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2400">
              <img
                src={img1}
                className="d-block w-100 slide-img carousel-homeImg"
                alt="..."
              />
              <div className="carousel-caption carousel-caption-homeImg">
                <h3 className="">UVXCEL - UNITED WE EXCEL!</h3>
                <p> We make sure your business scales to new heights!</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2400">
              <img src={img2} className="d-block w-100 slide-img" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img3} className="d-block w-100 slide-img" alt="..." />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </section>
      {/* <Features /> */}
      <HomeAboutUs />
      <HomeServices />
      <HomeTechnologies />
      <CustomersSection/>
    </>
  );
};

export default Home;
