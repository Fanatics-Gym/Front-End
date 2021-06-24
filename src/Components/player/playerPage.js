import React from "react";
import { Link } from "react-router-dom";
import falcons from "../../imgs/teamLogo.png";
import team from "../../imgs/washington_football_team_2020-pres-1.png";

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
        <div className="playerDashTeamCont">
          <div className="playerTeamAndLogoCont">
            <h2>Falcons</h2>
            <img src={falcons} />
          </div>
          <div className="playerNextGame">
            <h3>Next Game</h3>
            <div className="vsCont">
              <img src={falcons} /> <h3>Vs</h3>
              <img src={team} />
            </div>
          </div>
        </div>
        <div className="playerDashStats"></div>
      </div>
    </div>
  );
};

export default PlayerPage;
