import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const initialState = {
  name: "",
  link: "",
};

const validParamsArray = ["link", "holiday", "format", "people-practice"];
const validFileType = ["application/pdf"];

const CreateResourcePage = () => {
  let navigate = useNavigate();
  let params = useParams();
  const inputOuterDiv = useRef(null);
  const fileInput = useRef(null);
  const inputText = useRef(null);
  const [custom, setCustom] = useState(false);
  const [create, setCreate] = useState("");
  const [createData, setCreateData] = useState(initialState);
  const [showTo, setShowTo] = useState([]);
  const inputValue = (e) => {
    e.preventDefault();
    const { name, value, files } = e.target;
    if (files) {
      if (validFileType.includes(files[0].type)) {
        setCreateData({ ...createData, doc: files[0] });
        inputText.current.innerHTML = files[0].name;
      } else {
        return toast.error("Please select the Pdf file Only");
      }
    } else {
      return setCreateData({ ...createData, [name]: value });
    }
  };

  const checkHowSee = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setShowTo([...showTo, name]);
    } else {
      if (showTo.indexOf(name) !== -1) {
        setShowTo((item) =>
          item.filter((_, index) => index !== showTo.indexOf(name))
        );
      }
    }
  };

  const submitDocument = async (e) => {
    e.preventDefault();
    try {
      const { name, doc, link } = createData;

      const myForm = new FormData();
      if (!name || (!doc && !link)) {
        return toast.error("Fill all the field of form");
      } else if (custom === false) {
        myForm.set("howSee", ["anyone"]);
      } else if (custom === true && showTo.length === 0) {
        return toast.error("Please select who can see");
      } else {
        myForm.set("howSee", [showTo]);
      }
      myForm.append("name", name);
      myForm.append("type", params.create);
      if (doc) {
        myForm.append("doc", doc);
      } else {
        myForm.append("link", link);
      }
      console.log(myForm);
      const config = { Headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post("/resource/create", myForm, config);

      if (data) {
        toast.success(data);
      }
      setCreateData(initialState);
      setCustom(false);
      setShowTo([]);
      inputText.current.innerHTML = "Drag & Drop to Upload File";
      document.querySelector("#doc").value = "";
    } catch (error) {
      // return toast.error(error.response);
    }
  };
  useEffect(() => {
    if (validParamsArray.indexOf(params.create) === -1) {
      navigate(-1);
    } else {
      setCreate(params.create);
    }
  }, [navigate, params.create]);

  return (
    <div className="container resource-home-container">
      <ToastContainer autoClose={2000} className="toast-container" />
      <div className="main-content">
        <section className="get-in-touch">
          <h1 className="title">
            {create === "link"
              ? "Create New Link"
              : create === "holiday"
              ? "Create New Holiday Calender"
              : create === "format"
              ? "Create New Format"
              : "Create New People Practice"}
          </h1>
          <form className="contact-form row col-md-6 mx-auto">
            <div className="form-field ">
              <label className="label" htmlFor="name">
                {create === "link"
                  ? "Name Of Link"
                  : create === "holiday"
                  ? "Year Of Holiday Calender"
                  : create === "format"
                  ? "Name Of Format"
                  : "Version Of People Practice"}
              </label>
              <input
                id="name"
                name="name"
                className="input-text js-input"
                value={createData.name}
                type={create === "holiday" ? "number" : "text"}
                onChange={inputValue}
                required
              />
            </div>
            {create === "link" ? (
              <div className="form-field">
                <label className="label" htmlFor="link">
                  Paste link here
                </label>
                <input
                  id="link"
                  name="link"
                  value={createData.link}
                  className="input-text js-input"
                  type="text"
                  required
                  onChange={inputValue}
                />
              </div>
            ) : (
              <div className="form-field">
                <div
                  className="drag-area"
                  ref={inputOuterDiv}
                  onDragOver={(e) => {
                    e.preventDefault();
                    inputText.current.innerHTML = "Release to Upload File";
                    inputOuterDiv.current.classList.add("active");
                  }}
                  onDragLeave={(e) => {
                    e.preventDefault();
                    inputText.current.innerHTML = "Drag & Drop to Upload File";
                    inputOuterDiv.current.classList.remove("active");
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    let file = e.dataTransfer.files[0];
                    if (validFileType.includes(file.type)) {
                      setCreateData({ ...createData, doc: file });
                      inputText.current.innerHTML = file.name;
                    } else {
                      inputText.current.innerHTML =
                        "Drag & Drop to Upload File";
                      inputOuterDiv.current.classList.remove("active");
                      toast.error("Please select Pdf file only");
                    }
                  }}
                >
                  <div className="icon">
                    <i>
                      <FaCloudUploadAlt />
                    </i>
                  </div>
                  <header ref={inputText}>Drag & Drop to Upload File</header>
                  <span>OR</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      fileInput.current.click();
                    }}
                  >
                    Browse File
                  </button>
                  <input
                    type="file"
                    ref={fileInput}
                    onChange={inputValue}
                    hidden
                  />
                </div>
              </div>
            )}

            <div className="form-field radio-div d-flex">
              <label className="label" htmlFor="message">
                Anyone
              </label>
              <input
                id="message"
                name="whoSee"
                className="input-radio js-input"
                type="radio"
                required
                checked={!custom}
                onChange={(e) => setCustom(!e.target.checked)}
              />
              <label className="label" htmlFor="message">
                Custom
              </label>
              <input
                id="message"
                name="whoSee"
                className="input-radio js-input"
                type="radio"
                required
                checked={custom}
                onChange={(e) => setCustom(e.target.checked)}
              />
            </div>
            {custom ? (
              <div className="form-field radio-div d-flex">
                <label className="label" htmlFor="client">
                  Client
                </label>
                <input
                  id="client"
                  name="Client"
                  className="input-radio js-input"
                  type="checkbox"
                  required
                  onChange={checkHowSee}
                />
                <label className="label" htmlFor="employee">
                  Employee
                </label>
                <input
                  id="employee"
                  name="Employee"
                  className="input-radio js-input"
                  type="checkbox"
                  required
                  onChange={checkHowSee}
                />
                <label className="label" htmlFor="contractors">
                  Contractors
                </label>
                <input
                  id="contractors"
                  name="Contractors"
                  className="input-radio js-input"
                  type="checkbox"
                  required
                  onChange={checkHowSee}
                />
              </div>
            ) : (
              ""
            )}

            <div className="form-field col-lg-12">
              <input
                className="submit-btn"
                type="submit"
                value="Submit"
                onClick={(e) => submitDocument(e)}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreateResourcePage;
