import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PlayerRoster from "../../Recoil/atom/playerRosterAtom";
import { BaseUrl } from "../Auth/axios";
import RosterCard from "./playerRosterCard";

const Roster = () => {
  const [roster, setRoster] = useRecoilState(PlayerRoster);

  useEffect(() => {
    BaseUrl()
      .get(`${process.env.REACT_APP_API_URL}user/players`)
      .then((res) => {
        setRoster(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(roster);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Roster</h2>
      </div>
      <div className="rosterCont">
        {roster.map((player) => (
          <RosterCard key={player.id} stats={player} />
        ))}
      </div>
    </div>
  );
};

export default Roster;
