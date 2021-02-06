import React from "react";
import { Link } from "react-router-dom";
import { data } from "./PageData";

const FootballPage = () => {
  return (
    <div className="footballPage">
      <div className="footballHeader">
        <h2>FootBall</h2>
      </div>
      <div className="footballContent">
        <h2>Welcome to our Football League</h2>
        <h3>{data[0]}</h3>
        <h3>{data[1]}</h3>
        <h3>{data[2]}</h3>
      </div>
      <div className="applyButtonContainer">
        <Link to="/footballapply">
          <button>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FootballPage;
