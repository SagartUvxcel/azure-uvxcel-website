import React from "react";

const IndiaAddress = ({
  toggleExpandArrow,
  BsEnvelope,
  BsTelephone,
  BsChevronDown,
  HiOutlineLocationMarker,
}) => {
  return (
    <div className="col-12">
      <a
        onClick={toggleExpandArrow}
        className="card office-address-link-card-1  py-2 px-3"
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="true"
        aria-controls="collapseExample"
      >
        <div className="row pt-1">
          <div className="col-lg-11 col-10">
            <h5>India Office</h5>
          </div>

          <div className="col-lg-1 col-2">
            <BsChevronDown className="expand-arrow-1" size={24} />
          </div>
        </div>
      </a>

      <div className="collapse show" id="collapseExample">
        <div className="card-body pt-4 px-2">
          <h6 className="primary-color-heading">Pune:</h6>
          <div className="row">
            <div className="col-12 mt-1">
              <div className="row address-row">
                <div className="col-1">
                  <HiOutlineLocationMarker />
                </div>
                <div className="col-11">
                  <p>
                    Unit No. 223, Goodwill SquareMall, Dhanori, Pune,
                    Maharashtra, India.
                  </p>
                  <p className="bg-light mt-3">
                    <iframe
                      title="office-address"
                      className="gmap_iframe"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?hl=en&amp;q=uvxcel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row address-row">
                <div className="col-1">
                  <BsTelephone />
                </div>
                <div className="col-11">
                  For Enquiry: +91-20-67026259 | marketing@uvxcel.com
                </div>
              </div>
              <hr />
              <div className="row address-row">
                <div className="col-1">
                  <BsEnvelope />
                </div>
                <div className="col-11 mb-4">
                  For career opportunities: hr@uvxcel.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndiaAddress;
