import React from "react";

const MalaysiaAddress = ({
  toggleExpandArrow,
  BsEnvelope,
  BsTelephone,
  BsChevronDown,
  HiOutlineLocationMarker,
}) => {
  return (
    <div className="col-12 mt-3">
      <a
        onClick={toggleExpandArrow}
        className="card office-address-link-card-2  py-2 px-3"
        data-bs-toggle="collapse"
        href="#collapseExample2"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <div className="row pt-1">
          <div className="col-lg-11 col-10">
            <h5>Malaysia Office</h5>
          </div>
          <div className="col-lg-1 col-2">
            <BsChevronDown className="expand-arrow-2" size={24} />
          </div>
        </div>
      </a>

      <div className="collapse" id="collapseExample2">
        <div className="card-body pt-4">
          <div className="row">
            <div className="col-12 mt-1">
              <div className="row address-row">
                <div className="col-1">
                  <HiOutlineLocationMarker />
                </div>
                <div className="col-11">
                  <p>
                    Level 33,Ilham Tower,No.8,Jalan Binjai,50450 Kuala
                    Lumpur,Malaysia.
                  </p>
                  <p className="bg-light mt-3">
                    <iframe
                      title="office-address"
                      className="gmap_iframe"
                      frameBorder="0"
                      scrolling="no"
                      marginHeight="0"
                      marginWidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Level%2033,Ilham%20Tower,No.8,Jalan%20Binjai,50450%20Kuala%20Lumpur,Malaysia.+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.maps.ie/distance-area-calculator.html">
                        measure acres/hectares on map
                      </a>
                    </iframe>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row address-row">
                <div className="col-1">
                  <BsTelephone />
                </div>
                <div className="col-11">
                  For Enquiry: +60-12-200-0340 | marketing@uvxcel.com
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

export default MalaysiaAddress;
