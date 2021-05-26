import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import TeamsAtom from "../../Recoil/atom/teamAtom";
import ReactTable from "../admin/pickUpTable/reactTable";
import { BaseUrl } from "../Auth/axios";

const TeamTable = () => {
  const [teams, setTeams] = useRecoilState(TeamsAtom);
  useEffect(() => {
    BaseUrl()
      .get(`team/`)
      .then((res) => {
        setTeams(res.data);
      });
  });
  const teamColumns = React.useMemo(() => [
    {
      Header: "Team Name",
      columns: [{ Header: "Name", accessor: "name" }],
    },
    {
      Header: "Number of Players",
      columns: [{ Header: "Players", accessor: "number_players" }],
    },
    {
      Header: "Stats",
      columns: [
        { Header: "Wins", accessor: "wins" },
        { Header: "Losses", accessor: "losses" },
      ],
    },
  ]);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Teams</h2>
      </div>
      <div className="pickUpTable">
        <ReactTable columns={teamColumns} data={teams} />
      </div>
    </div>
  );
};

export default TeamTable;
