import React, { useEffect } from "react";
import TechnologyDetails from "./TechnologyDetails";
import { iconsData } from "./iconsData";
import Swiper from "swiper/bundle";

const Technologies = () => {
  useEffect(() => {
    new Swiper(".swiper-container.technologies-slides", {
      loop: true,
      autoplaySpeed: 1800,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 60,
      autoplay: { delay: 1800, disableOnInteraction: false },
      pagination: {
        el: ".swiper-pagination.tech-slider-pagination",
        clickable: true,
      },
    });

    // For showing active technology name
    if (document.querySelector(".technologies-slides.swiper-slide-active")) {
      document
        .querySelector(".technologies-slides .swiper-slide-active")
        .querySelector("h5")
        .classList.add("visible");

      document
        .querySelector(".technologies-slides .swiper-slide-active")
        .querySelector("svg")
        .classList.add("icon-active-transition");
    }
    const interval = setInterval(function () {
      let allSlides = document.querySelectorAll(
        ".technologies-slides .swiper-slide"
      );
      for (let slide of allSlides) {
        if (Array.from(slide.classList).includes("swiper-slide-active")) {
          slide.querySelector("h5").classList.add("visible");
          slide.querySelector("svg").classList.add("icon-active-transition");
        } else {
          slide.querySelector("h5").classList.add("hidden-title-transition");
          slide.querySelector("h5").classList.remove("visible");
          slide.querySelector("svg").classList.remove("icon-active-transition");
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="technologies padding-and-height-for-main-container active fade-up">
      <div className="container ">
        <h1 className="text-center primary-color-heading fw-bold ">
          Technologies we provide assistance in
        </h1>
        <div className="" style={{ overflow: "hidden", paddingTop: "4rem" }}>
          <div className="row">
            <div className="col-12">
              <div className="swiper-container technologies-slides">
                <div className="swiper-wrapper">
                  {iconsData.map((item) => {
                    return (
                      <div className="swiper-slide" key={item.name}>
                        <div className="card">
                          <h5 className="card-title primary-color-heading text-center">
                            {item.name}
                          </h5>
                          <div className="text-center">
                            <i className="icon-transition">{item.component}</i>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="swiper-pagination tech-slider-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechnologyDetails />
    </div>
  );
};

export default Technologies;
