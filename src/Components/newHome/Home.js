import React from "react";
import { Link } from "react-router-dom";
import FootBallLogo from "../../imgs/fanaticsFootball.png";

const HomePage = () => {
  return (
    <div className="footballHomePage">
      <img src={FootBallLogo} />
      <Link to="/footballapply">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default HomePage;
