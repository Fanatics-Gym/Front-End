import React from "react";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import NoImg from "../../imgs/download.png";

const PlayerProfile = () => {
  const userData = useRecoilValue(UserInfo);
  const info = userData.userInfo;
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Player Profile</h2>
      </div>
      <div className="playerInfoCont">
        <section className="playerInfoSection">
          <h3>Player Contact</h3>
          <div className="playerContactCont">
            <div>
              {info.img !== undefined ? (
                <img src={info.img} alt="user img" />
              ) : (
                <img src={NoImg} alt="no img" />
              )}
            </div>
            <div>
              <p>
                <b>Name: </b>
                {info.first_name} {info.last_name}
              </p>
              <p>
                <b>Email: </b>
                {info.email}
              </p>
            </div>
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
