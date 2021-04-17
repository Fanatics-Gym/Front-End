import React from "react";

const RosterCard = ({ stats }) => {
  console.log(stats);
  return (
    <div>
      <p>UserName: {stats.username}</p>
      <p>Touchdowns: {stats.touchdowns}</p>
      <p>Fumbles: {stats.fumbles}</p>
      <p>Interceptions: {stats.Interceptions}</p>
      <p>Tackles: {stats.tackles}</p>
    </div>
  );
};

export default RosterCard;
