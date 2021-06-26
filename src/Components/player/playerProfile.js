import React from "react";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import NoImg from "../../imgs/download.png";

const PlayerProfile = () => {
  const userData = useRecoilValue(UserInfo);
  const info = userData;
  console.log(info);
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
                {info.userInfo.first_name} {info.userInfo.last_name}
              </p>
              <p>
                <b>Height: </b>
                {info.profileInfo.height}
              </p>
              <p>
                <b>Weight: </b>
                {info.profileInfo.weight} LBS
              </p>
              <p>
                <b>Team: </b>
                {info.profileInfo.team ? info.profileInfo.team : "None"}
              </p>
            </div>
            <div>
              <p>
                <b>Bio: </b>
                {info.profileInfo.bio}
              </p>
              <p>
                <b>Company: </b>
                {info.profileInfo.company}
              </p>
              <p>
                <b>Website: </b>
                {info.profileInfo.website}
              </p>
            </div>
          </div>
        </section>
        <section className="playerInfoSection">
          <h3>Player Stats </h3>
          <div>
            <p>
              <b>Tackles: </b>
              {info.userInfo.tackles}
            </p>
            <p>
              <b>Interceptions: </b>
              {info.userInfo.Interceptions}
            </p>
            <p>
              <b>Catches: </b>
              {info.userInfo.fumbles}
            </p>
            <p>
              <b>Touchdownes: </b>
              {info.userInfo.touchdowns}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlayerProfile;
