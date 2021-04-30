import React from "react";

const PickGearDate = () => {
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Pick Up Date</h2>
      </div>
      <section className="pickUpGearCont">
        <div>
          <h3>Choose a date for players to pick up gear</h3>
          <input id="pickUpDate" name="pickUpDate" type="date" />
        </div>
        <div>
          <h3>Dates set to pick up gear</h3>
        </div>
      </section>
    </div>
  );
};

export default PickGearDate;
