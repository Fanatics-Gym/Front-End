import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";

const PlayerPage = () => {
  const userInfo = useRecoilValue(UserInfo);
  console.log(userInfo);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Player Menu</h2>
      </div>
      <Link to="/player-profile">Profile</Link>
      <Link to="/pick-gear">Pick Gear</Link>
    </div>
  );
};

export default PlayerPage;
