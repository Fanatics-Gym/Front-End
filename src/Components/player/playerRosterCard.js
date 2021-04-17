import React from "react";
import NoImg from "../../imgs/download.png";

const RosterCard = ({ stats }) => {
  console.log(stats);
  return (
    <div className="rosterCard">
      <div className="cardName">
        {stats.img !== undefined ? (
          <img src="../../imgs/download.png" />
        ) : (
          <img src={NoImg} />
        )}
        <p> {stats.username}</p>
      </div>
      <p>Touchdowns: {stats.touchdowns}</p>
      <p>Fumbles: {stats.fumbles}</p>
      <p>Interceptions: {stats.Interceptions}</p>
      <p>Tackles: {stats.tackles}</p>
    </div>
  );
};

export default RosterCard;
