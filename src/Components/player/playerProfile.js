import React from "react";
import { profileData, profileStats } from "./playerData";

const PlayerProfile = () => {
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
              {profileData.userName}
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
              {profileStats.tackles}
            </p>
            <p>
              <b>Interceptions: </b>
              {profileStats.interception}
            </p>
            <p>
              <b>Catches: </b>
              {profileStats.catches}
            </p>
            <p>
              <b>Touchdownes: </b>
              {profileStats.touchdowns}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerProfile;
