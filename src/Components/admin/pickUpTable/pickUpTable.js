import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PickUpDatesPlayers from "../../../Recoil/atom/pickUpDatesPlayersAtom";
import { BaseUrl } from "../../Auth/axios";
import ReactTable from "./reactTable";

function PickUpTable() {
  const [playersGear, setPlayersGear] = useRecoilState(PickUpDatesPlayers);
  useEffect(() => {
    BaseUrl()
      .get(`pickUp/playersPickUp`)
      .then((res) => {
        setPlayersGear(res.data);
      });
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
      Header: "Gear",
      columns: [
        { Header: "Helmet", accessor: "helmet" },
        { Header: "Shoulder Pads", accessor: "shoulderPads" },
        { Header: "Pants", accessor: "pants" },
        { Header: "Jeresy", accessor: "jeresy" },
        { Header: "Back Plate", accessor: "backPlate" },
      ],
    },
    {
      Header: "Pick Up",
      columns: [
        { Header: "Picked Up", accessor: "pickedUp" },
        { Header: "Date", accessor: "date" },
      ],
    },
  ]);

  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Gear Pick Up</h2>
      </div>
      <div className="pickUpTable">
        <ReactTable columns={columns} data={playersGear} />
      </div>
    </div>
  );
}

export default PickUpTable;
