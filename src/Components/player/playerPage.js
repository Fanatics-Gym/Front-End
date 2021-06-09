import React from "react";
import { Link } from "react-router-dom";

const PlayerPage = () => {
  return (
    <div className="componentCont">
      <div className="playerDashboardCont">
        <div className="playerOptionsCont">
          <div className="pageHeader">
            <h3>Welcome,</h3>
            <h2>Player Name</h2>
          </div>
          <div className="playerMenu">
            <Link className="playerOption" to="/player-profile">
              My Profile
            </Link>
            <Link className="playerOption" to="/pick-gear">
              Pick Gear
            </Link>
            <Link className="playerOption" to="/pick-gear">
              My Team
            </Link>
            <Link className="playerOption">My Schedule</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
