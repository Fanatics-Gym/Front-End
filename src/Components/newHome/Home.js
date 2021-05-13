import React from "react";
import { Link } from "react-router-dom";
import FootBallLogo from "../../imgs/fanaticsFootball.png";

const HomePage = () => {
  return (
    <div className="componentCont">
      <div className="footballHomePage">
        <img src={FootBallLogo} />
        <Link className="homePageLink" to="/footballapply">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
