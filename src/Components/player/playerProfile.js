import React from "react";
import { useRecoilValue } from "recoil";
import { profileData, profileStats } from "./playerData";
import UserInfo from "../../Recoil/atom/userData";

const PlayerProfile = () => {
  const userData = useRecoilValue(UserInfo);
  const info = userData.user;
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Player Profile</h2>
      </div>
      <div className="playerInfoCont">
        <section className="playerInfoSection">
          <div>
            <h3>Player Contact</h3>
            <p>
              <b>UserName: </b>
              {info.username}
            </p>
            <p>
              <b>Email: </b>
              {profileData.email}
            </p>
          </div>
        </section>
        <section className="playerInfoSection">
          <div>
            <h3>Player Stats </h3>
            <p>
              <b>Tackles: </b>
              {info.tackles}
            </p>
            <p>
              <b>Interceptions: </b>
              {info.Interceptions}
            </p>
            <p>
              <b>Catches: </b>
              {info.fumbles}
            </p>
            <p>
              <b>Touchdownes: </b>
              {info.touchdowns}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerProfile;
