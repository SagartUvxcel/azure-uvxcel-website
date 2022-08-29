import React from "react";

const NewsLetter = ({ onSubmit, onEmailChange, emailErr, email }) => {
  return (
    <form onSubmit={(e) => onSubmit(e)} className="newsletter">
      <div className="row reveal fade-up">
        <div className="col-12 col-md-8">
          <input
            onChange={(e) => onEmailChange(e)}
            name="email"
            value={email}
            type="text"
            id="email"
            placeholder="Enter email to Subscribe news and updates"
            className="form-control"
            required
          />
          {emailErr ? <p className="text-danger">Email is not Valid</p> : ""}
        </div>
        <div className="col-md-4 col-12">
          <button className="btn subscribe-btn primary-btn" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewsLetter;
