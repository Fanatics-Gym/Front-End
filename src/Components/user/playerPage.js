import React from "react";
import { Link } from "react-router-dom";

const PlayerPage = () => {
  return (
    <div>
      <Link to="/player-profile">Profile</Link>
      <Link to="/pick-gear">Pick Gear</Link>
    </div>
  );
};

export default PlayerPage;
