import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Pagination from "../15.React-Pagination/Pagination";
import JobDescription from "./JobDescription";
import AllJobs from "./AllJobs";
import NewsLetter from "./NewsLetter";
import { FiSearch } from "react-icons/fi";

const Careers = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState([]);
  const [distinctLocations, setDistinctLocations] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [jobLocation, setJobLocation] = useState("all");
  // const [searchFocus, setSearchFocus] = useState(false);
  const searchInput = useRef();
  const searchPTag = useRef();
  const searchContainerRef = useRef();

  const searchArray = [
    "Search by Designation",
    "Search by Role",
    "Search by Location",
  ];

  let textArrayIndex = 0;

  const downToUp = () => {
    if (searchArray[textArrayIndex]) {
      searchPTag.current.innerHTML = searchArray[textArrayIndex];

      searchPTag.current.classList.remove("removePlace");
      searchPTag.current.classList.add("setPlace");
      // if (!searchFocus) {
      //   myTimeout1 = setTimeout(moveUp, 2000);
      // }
      setTimeout(moveUp, 2000);
    }
  };

  const moveUp = () => {
    searchPTag.current.classList.remove("setPlace");
    searchPTag.current.classList.add("removePlace");
    if (textArrayIndex === searchArray.length - 1) {
      textArrayIndex = 0;
    } else {
      textArrayIndex++;
    }
    // if (!searchFocus) {
    //   myTimeout2 = setTimeout(downToUp, 1000);
    // }
    setTimeout(downToUp, 1000);
  };

  let jobsPerPage = 3;

  const getAllJobs = async (location = "all", designation = "all") => {
    // Get all jobs without pagination so that we can get total count of all jobs
    const totalJobs = await axios.get(
      `/get-jobs?location=${location}&search=${designation}`
    );

    // Jobs based on location/designation filter on page 1.
    const getJobs = await axios.get(
      `/get-jobs?location=${location}&search=${designation}&page=1&limit=${jobsPerPage}`
    );
    setJobs(getJobs.data);

    // To set total page count based on jobs per page and total jobs. e.g. if total jobs = 20 and jobs per page = 5 then page count will be 4
    const totalJobsCount = totalJobs.data.length;
    setPageCount(Math.ceil(totalJobsCount / jobsPerPage));

    // load first job for showing in job description section.
    if (totalJobsCount >= 1) {
      setCurrentJob(totalJobs.data[0]);
      for (let item of totalJobs.data) {
        item.location.split(",").forEach((i) => {
          distinctLocations.push(i);
        });
      }
    }

    // To get distinct job locations from database (Used for location filter)
    const setOfLocations = [...new Set(distinctLocations)];
    setDistinctLocations(setOfLocations);
  };

  // Fetch more jobs on page click.
  const fetchMoreJobs = async (currentPage) => {
    const res = await axios.get(
      `/get-jobs?location=${jobLocation}&search=${searchValue}&page=${currentPage}&limit=${jobsPerPage}`
    );
    return res.data;
  };

  // This will run when we click any page link in pagination. e.g. prev, 1, 2, 3, 4, next.
  const handlePageClick = async (pageNumber) => {
    let currentPage = pageNumber.selected + 1;
    const moreJobsFromServer = await fetchMoreJobs(currentPage);
    setJobs(moreJobsFromServer);
  };

  // Function for making job active on click.
  const loadCurrentJob = async (id, e) => {
    for (let job of jobs) {
      if (job._id === id) {
        setCurrentJob(job);
      }
    }
    document.querySelectorAll(".job-card").forEach((card) => {
      card.classList.remove("active-job");
    });
    e.target.closest(".card").classList.add("active-job");
  };

  // Function for showing duration from the date of job added to current date.
  const daysCount = (job) => {
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();
    const todaysDate = parseInt(currentMonth) * 30 + parseInt(currentDay);
    let daysDiff =
      todaysDate -
      (parseInt(job.dateAdded.split("/")[1]) * 30 +
        parseInt(job.dateAdded.split("/")[2]));
    return daysDiff === 0
      ? " Today"
      : daysDiff === 1
      ? daysDiff + " day ago"
      : daysDiff > 59
      ? " 2 months ago"
      : daysDiff > 29
      ? " 1 month ago"
      : daysDiff + " days ago";
  };

  // Validation for email.
  const onEmailChange = (e) => {
    let emailData = e.target.value;
    var mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailFormat.test(emailData)) {
      setEmailErr(false);
      e.target.style.border = "2px solid green";
    } else {
      setEmailErr(true);
      e.target.style.border = "2px solid red";
    }
    setEmail(emailData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This will run when clicked on subscribe button.
  const onSubmit = async (e) => {
    e.preventDefault();
    if (emailErr === true) {
      toast.error("Please enter valid email");
    } else {
      await axios.post("/save_email", formData);
      toast.success("Subscribed Successfully");
      const input = document.querySelector("#email");
      input.value = "";
      input.style.border = "";
    }
  };

  useEffect(() => {
    downToUp();
  }, []);

  useEffect(() => {
    getAllJobs(jobLocation, searchValue);
    if (searchValue) {
      searchPTag.current.classList.add("stopText");
    } else if (searchPTag.current.classList.contains("stopText")) {
      searchPTag.current.classList.remove("stopText");
    }
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <>
      <div className="career-top-container">
        <div className="overlay"></div>

        <section className="container-fluid career-section-top ">
          <div className="careers padding-and-height-for-main-container">
            <div className="container ">
              <h1 className="primary-color-heading fw-bold text-center mb-4 active fade-in">
                Career Opportunities
              </h1>

              <div className="row justify-content-center ">
                <div className="col-lg-4 col-md-6 px-4-on-small-screen active fade-left">
                  {/* Location filter */}
                  <select
                    className="form-select"
                    onChange={(e) => {
                      getAllJobs(e.target.value, searchValue);
                      setJobLocation(e.target.value);
                    }}
                  >
                    <option value="all">All locations</option>
                    {distinctLocations.map((location) => {
                      return (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-lg-6 col-md-6 active fade-right">
                  <div className="container">
                    {/* Search by designation filter*/}
                    <div
                      className="search-container mt-3 mt-md-0"
                      ref={searchContainerRef}
                    >
                      <p ref={searchPTag}></p>
                      <input
                        className="search-input"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        ref={searchInput}
                      />
                      <button>
                        <FiSearch />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 justify-content-center ">
                {/* All Jobs */}
                <div className="col-lg-4 col-md-6 active fade-left">
                  <AllJobs
                    jobs={jobs}
                    loadCurrentJob={loadCurrentJob}
                    daysCount={daysCount}
                  />
                  <div className="row py-2">
                    <div className="col-12">
                      <Pagination
                        pageCount={pageCount}
                        handlePageClick={handlePageClick}
                      />
                    </div>
                  </div>
                </div>
                <hr
                  className="d-md-none d-block"
                  style={{ margin: "1rem 0rem" }}
                  id="job"
                />
                <div className="col-lg-6  col-md-6 active fade-right">
                  <div className="container-fluid job-description">
                    <div className="row">
                      <div className="col-md-12">
                        {/* Job description section */}
                        <JobDescription currentJob={currentJob} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job application form link */}
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 ">
                    <p className="fw-bold mt-5 text-white form-link-text reveal fade-up">
                      Interested candidates to send their profile to
                      hr@uvxcel.com OR use the Link below to fill the Candidate
                      Information Form.
                      <br />
                      <NavLink className="candidate-form-link" to="/applyform">
                        Candidate Form
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>

              {/* Subscribe to newsletter and updates section */}
              <div className="row  justify-content-center">
                <div className="col-lg-10 col-12">
                  <NewsLetter
                    onSubmit={onSubmit}
                    onEmailChange={onEmailChange}
                    email={email}
                    emailErr={emailErr}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
