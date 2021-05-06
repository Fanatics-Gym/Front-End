import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import PickUpDatesPlayers from "../../../Recoil/atom/pickUpDatesPlayersAtom";
import PickUpTable from "./pickUpTable";
import { BaseUrl } from "../../Auth/axios";

function PickUpDisplay() {
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
      Header: "Picked Up",
      columns: [
        { Header: "Picked Up", accessor: "pickedUp" },
        { Header: "Date", accessor: "date" },
      ],
    },
  ]);

  return (
    <div className="pickUpTable">
      <PickUpTable columns={columns} data={playersGear} />
    </div>
  );
}

export default PickUpDisplay;
