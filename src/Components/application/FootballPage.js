import React from "react";
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
      <div className="applyButton">
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default FootballPage;
