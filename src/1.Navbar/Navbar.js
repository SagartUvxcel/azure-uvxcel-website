import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../images/uvxcel.png";
import {} from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";
import indiaFlag from "../images/indian flag icon.png";
import malaysiaFlag from "../images/malaysia flag icon.png";

const Navbar = () => {
  const [navToggleIcon, setNavToggleIcon] = useState(false);
  // on medium and small screen if we click on any route e.g. about, home etc. the navbar will close automatically.
  const closeCollapsedNavbarOnClick = () => {
    document.getElementById("navbarNav").classList.remove("show");
    setNavToggleIcon(false);
  };

  //for change the icon of navbar toggle
  const changeNavbarButton = () => {
    const status = document
      .querySelector(".navbar-toggler")
      .getAttribute("aria-expanded");
    if (status === "true") {
      setNavToggleIcon(true);
    } else {
      setNavToggleIcon(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top p-0">
        <div className="container-fluid active fade-bottom">
          <NavLink to="/">
            <img className="navbar-brand" src={img} alt="...." />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={changeNavbarButton}
          >
            <span>
              {navToggleIcon === false ? (
                <GrMenu className="menu-button" color="black" size={21} />
              ) : (
                <GrClose className="menu-button" color="black" size={21} />
              )}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/about"
                >
                  About us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/technologies"
                >
                  Technologies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/careers"
                >
                  Careers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={closeCollapsedNavbarOnClick}
                  className="nav-link mx-2"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="country ">
        <div className="btn-group dropstart active fade-right">
          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={indiaFlag} alt="" />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                target="_black"
                href="https://google.com"
              >
                <img src={malaysiaFlag} alt="malaysia" /> Malaysia
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
