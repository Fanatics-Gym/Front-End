import React from "react";
import { profileData, profileStats } from "./playerData";

const PlayerProfile = () => {
  return (
    <div className="playerCont">
      <div className="headerCont">
        <h2>Player Profile</h2>
      </div>
      <div className="playerInfoCont">
        <section className="playerInfoSection">
          <div>
            <h3>Player Contact</h3>
            <p>{profileData.userName}</p>
            <p>{profileData.email}</p>
          </div>
        </section>
        <section className="playerInfoSection">
          <div>
            <h3>Player Stats </h3>
            <p>{profileStats.tackles}</p>
            <p>{profileStats.interception}</p>
            <p>{profileStats.catches}</p>
            <p>{profileStats.touchdowns}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerProfile;
