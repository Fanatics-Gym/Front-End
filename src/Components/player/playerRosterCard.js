import React from "react";

const RosterCard = ({ stats }) => {
  console.log(stats);
  return (
    <div>
      <p>{stats.username}</p>
      <p>{stats.touchdowns}</p>
      <p>{stats.fumbles}</p>
      <p>{stats.Interceptions}</p>
      <p>{stats.tackles}</p>
    </div>
  );
};

export default RosterCard;
