import React from "react";
import NoImg from "../../imgs/download.png";

const TeamProfile = () => {
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Team Profile</h2>
      </div>
      <div className="playerInfoCont">
        <section className="playerInfoSection">
          <h3>Team</h3>
          <div className="playerContactCont">
            <div>
              <img src={NoImg} />
            </div>
            <div>
              <p>
                <b>Name:</b> Team Name
              </p>
            </div>
          </div>
        </section>
        <section className="playerInfoSection">
          <h3>Team Stats</h3>
          <div>
            <p>
              <b>Wins:</b>0
            </p>
            <p>
              <b>Losses:</b>0
            </p>
          </div>
        </section>
        <section className="playerInfoSection">
          <h3>Team Roster</h3>
        </section>
      </div>
    </div>
  );
};

export default TeamProfile;
