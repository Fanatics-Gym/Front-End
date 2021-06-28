import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import NoImg from "../../imgs/download.png";

const PlayerProfile = () => {
  const userData = useRecoilValue(UserInfo);
  const [edit, setEdit] = useState(false);

  const editInfo = () => {
    setEdit(!edit);
  };

  console.log(edit);
  const info = userData;
  console.log(info);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Player Profile</h2>
      </div>
      <div className="playerInfoCont">
        <section className="playerInfoSection">
          <div className="playerContactCont">
            <div className="playerInfoCont">
              <div>
                {info.img !== undefined ? (
                  <img src={info.img} alt="user img" />
                ) : (
                  <img src={NoImg} alt="no img" />
                )}
              </div>
              <div className="playerInititalInfo">
                <div>
                  <p>
                    <b>Name: </b>
                    {info.userInfo.first_name} {info.userInfo.last_name}
                  </p>
                  <p>
                    <b>Height: </b>
                    {edit ? (
                      <input value={info.profileInfo.height} />
                    ) : (
                      info.profileInfo.height
                    )}
                  </p>
                  <p>
                    <b>Weight: </b>
                    {edit ? (
                      <input value={info.profileInfo.weight} />
                    ) : (
                      info.profileInfo.weight
                    )}{" "}
                    LBS
                  </p>
                  <p>
                    <b>Team: </b>
                    {info.profileInfo.team ? info.profileInfo.team : "None"}
                  </p>
                </div>
                <div>
                  <h4 onClick={editInfo}>(edit)</h4>
                </div>
              </div>
            </div>
            <div>
              <p>
                <b>Company: </b>
                {edit ? (
                  <input value={info.profileInfo.company} />
                ) : (
                  info.profileInfo.company
                )}
              </p>
              <p>
                <b>Website: </b>
                {edit ? (
                  <input value={info.profileInfo.height} />
                ) : (
                  info.profileInfo.website
                )}
              </p>
              <p>
                <b>Bio: </b>
                {edit ? (
                  <textarea value={info.profileInfo.bio} />
                ) : (
                  info.profileInfo.bio
                )}
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
