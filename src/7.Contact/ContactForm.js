import React, { useState } from "react";
import { toast } from "react-toastify";
import { codes } from "./countryCodes";
import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);

  const [helptext, setHelpText] = useState("");
  const [helpErr, setHelpErr] = useState(false);

  const [countrycode, setCountryCode] = useState("+7 840");

  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState(false);

  const [formData, setFormData] = useState([]);

  const onNameChange = (e) => {
    let nameData = e.target.value;
    if (nameData.length < 1) {
      e.target.style.border = "2px solid red";
      setNameErr(true);
    } else {
      setNameErr(false);
      e.target.style.border = "2px solid green";
    }
    setName(nameData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onEmailChange = (e) => {
    let emailData = e.target.value;
    var mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(emailData)) {
      setEmailErr(false);
      e.target.style.border = "2px solid green";
    } else {
      setEmailErr(true);
      e.target.style.border = "2px solid red";
    }

    setEmail(emailData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onMobileChange = (e) => {
    let mobileData = e.target.value;
    var mobileformat = /^\d{10}$/;
    // var mobileformat = /^\+?([0-9]{0,2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/
    if (mobileData.match(mobileformat)) {
      setMobileErr(false);
      e.target.style.border = "2px solid green";
    } else {
      setMobileErr(true);
      e.target.style.border = "2px solid red";
    }
    setMobile(mobileData);
    setFormData({ ...formData, [e.target.name]: countrycode + e.target.value });
  };

  const onSelectChange = (e) => {
    let value = e.target.value;
    if (value === "issue") {
      document.getElementById("help").placeholder =
        "Please describe your issue ";
    } else {
      document.getElementById("help").placeholder = "How Can We help You ?";
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onHelpChange = (e) => {
    let helpData = e.target.value;
    if (helpData.length < 1) {
      e.target.style.border = "2px solid red";
      setHelpErr(true);
    } else {
      setHelpErr(false);
      e.target.style.border = "2px solid green";
    }
    setHelpText(helpData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    setFormData({ ...formData });
    e.preventDefault();
    if (
      nameErr === true ||
      emailErr === true ||
      mobileErr === true ||
      helpErr === true
    ) {
      toast.error("Please enter correct details in the form");
    } else {
      await axios.post("/save_data", formData);
      toast.success("DATA SENT SUCCESSFULLY");
      const inputs = document.querySelectorAll(
        "#name, #email, #mobile, #sub, #help"
      );
      inputs.forEach((input) => {
        input.value = "";
        input.style.border = "";
      });
    }
  };
  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className="card contact-form p-4 shadow-sm"
    >
      <div className="row justify-content-center">
        <div className="mb-4 col-6">
          <div className="form-group">
            <input
              onChange={(e) => onNameChange(e)}
              type="text"
              name="name"
              value={name}
              className="form-control p-2"
              id="name"
              placeholder="Full Name"
              required
            />
          </div>
          {nameErr ? (
            <p className="text-danger">Min 4 characters required</p>
          ) : (
            ""
          )}
        </div>
        <div className="mb-4 col-6">
          <div className="form-group">
            <input
              onChange={(e) => onEmailChange(e)}
              type="text"
              name="email"
              value={email}
              className="form-control p-2"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          {emailErr ? <p className="text-danger">Email is not Valid</p> : ""}
        </div>
        <div className="col-lg-6 col-12">
          <div className="form-group mb-4">
            <div className="input-group">
              <select
                id="mySelect"
                onChange={(e) => {
                  setCountryCode(e.target.value);
                }}
                className="input-group-text btn btn-white"
              >
                {codes.map((code) => {
                  return (
                    <option key={code.name} value={code.code}>
                      {code.name} {code.code}
                    </option>
                  );
                })}
              </select>
              <input
                onChange={(e) => onMobileChange(e)}
                type="text"
                name="mobile"
                value={mobile}
                className="form-control p-2"
                id="mobile"
                placeholder="Mobile number"
                required
              />
              {mobileErr ? (
                <p className="text-danger">Please enter valid mobile number</p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="form-group mb-4">
            <select
              name="topic"
              className="form-select form-control p-2"
              aria-label="Default select example"
              required
              onChange={(e) => onSelectChange(e)}
            >
              <option>Select topic</option>
              <option value="enquiry">Enquiry</option>
              <option value="issue">Report an issue</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-4">
            <textarea
              maxLength={45}
              onChange={(e) => onHelpChange(e)}
              cols="30"
              name="helptext"
              value={helptext}
              rows="4"
              type="text"
              className="form-control p-2 text"
              id="help"
              placeholder="How Can We help You ?"
              required
            />
            {helpErr ? (
              <p className="text-danger">Please enter something</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <span className="form-group col-12">
          <button
            style={{ width: "100%" }}
            type="submit"
            id="submit-btn"
            className="btn primary-btn p-2"
          >
            Send Message
          </button>
        </span>
      </div>
    </form>
  );
};

export default ContactForm;
