import React from "react";
import { Link } from "react-router-dom";
import FootBallLogo from "../../imgs/fanaticsFootball.png";

const HomePage = () => {
  return (
    <div className="componentCont">
      <div className="footballHomePage">
        <img src={FootBallLogo} />
        <Link className="button" to="/footballapply">
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
