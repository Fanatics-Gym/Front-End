import React from "react";
import { useRecoilValue } from "recoil";
import { profileData, profileStats } from "./playerData";
import UserInfo from "../../Recoil/atom/userData";

const PlayerProfile = () => {
  const userData = useRecoilValue(UserInfo);
  const stats = userData[0];
  const info = userData[1];
  return (
    <div className="componentCont">
      <div className="headerCont">
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
              {stats.tackles}
            </p>
            <p>
              <b>Interceptions: </b>
              {stats.Interceptions}
            </p>
            <p>
              <b>Catches: </b>
              {stats.fumbles}
            </p>
            <p>
              <b>Touchdownes: </b>
              {stats.touchdowns}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerProfile;
