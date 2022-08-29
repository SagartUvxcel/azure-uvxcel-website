import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImUpload3 } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// import { resourceData } from "../../App";

const AllLink = () => {
  const [link, setLink] = useState();
  // const {} from
  // console.log(link);

  const getAllLink = async () => {
    try {
      const { data } = await axios.get("/resource/data/link");
      setLink(data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  useEffect(() => {
    getAllLink();
  }, []);
  return (
    <div className="container resource-home-container">
      <ToastContainer autoClose={2000} className="toast-container" />
      <h1>Links</h1>
      <div className="main-content">
        <div className="button-container">
          <button>
            <Link to="/resources/create-form/link">
              <ImUpload3 className="upload-button" />
              {/* <h5>Upload</h5> */}
            </Link>
          </button>
          <button>
            <RiDeleteBin6Line className="del-button" />
            {/* <h5>Delete</h5> */}
          </button>
        </div>
        <ul>
          {link &&
            link.map((item, index) => {
              return (
                <li key={item._id}>
                  <a
                    className="resource-link"
                    rel="noreferrer"
                    target="_blank"
                    href={item.link}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default AllLink;
