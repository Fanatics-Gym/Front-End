import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PlayerRoster from "../../Recoil/atom/playerRosterAtom";
import ReactTable from "../admin/pickUpTable/reactTable";
import { BaseUrl } from "../Auth/axios";

const Roster = () => {
  const [roster, setRoster] = useRecoilState(PlayerRoster);

  useEffect(() => {
    BaseUrl()
      .get(`stats/`)
      .then((res) => {
        setRoster(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      columns: [
        { Header: "First Name", accessor: "first_name" },
        { Header: "Last Name", accessor: "last_name" },
      ],
    },
    {
      Header: "stats",
      columns: [
        { Header: "Touchdowns", accessor: "touchdowns" },
        { Header: "Tackles", accessor: "tackles" },
        { Header: "Fumbles", accessor: "fumbles" },
        { Header: "Interceptions", accessor: "Interceptions" },
      ],
    },
  ]);

  console.log(roster);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Roster</h2>
      </div>
      <div className="pickUpTable">
        <ReactTable columns={columns} data={roster} />
      </div>
    </div>
  );
};

export default Roster;
