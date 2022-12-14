import React from "react";
import { Link } from "react-scroll";
import {
  BsFillBriefcaseFill,
  BsCashStack,
  BsClockHistory,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Loader from "./Loader";

const AllJobs = ({ jobs, daysCount, loadCurrentJob, loading }) => {
  return (
    <>
      {loading ? (
        <h4 className="my-4 text-center">
          <Loader />
        </h4>
      ) : jobs.length <= 0 ? (
        <h4 className="my-4 noJobFound text-center text-white">
          No jobs found
        </h4>
      ) : (
        jobs.map((job) => (
          <Link
            style={{ textDecoration: "none" }}
            to="job"
            onClick={(e) => loadCurrentJob(job._id, e)}
            className="card job-card shadow-sm mb-4"
            key={job._id}
          >
            <div className="card-body">
              <h5 className="card-title text-center-smallScreen">
                {job.designation}
              </h5>
              <span>
                <BsFillBriefcaseFill size={15} />
                <span className="mx-1">{job.experience} Yrs</span>
              </span>

              <span className="mx-2">
                <BsCashStack />
                <span className="mx-1">
                  {job.salary ? job.salary : "Not Mentioned"}
                </span>
              </span>

              <span>
                <MdLocationOn />
                <span className="mx-1"> {job.location.split(",").length > 1

                  ? job.location.split(",").join(" & ")

                  : job.location}</span>
              </span>
              <p className="card-text mt-2">
                {job.skills
                  ? job.skills.split(",").join(" . ")
                  : "Not Available"}
              </p>
              <div className="job-added-time">
                <BsClockHistory size={13} color="var(--primary)" />
                <span className="text-muted mx-1">{daysCount(job)}</span>
              </div>
            </div>
          </Link>
        ))
      )}
    </>
  );
};

export default AllJobs;
