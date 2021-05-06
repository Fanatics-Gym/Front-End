import React from "react";
import PickUpTable from "./pickUpTable";

function PickUpDisplay() {
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
    <div>
      <PickUpTable columns={columns} />
    </div>
  );
}

export default PickUpDisplay;
