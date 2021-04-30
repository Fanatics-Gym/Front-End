import React, { useState } from "react";
import { BaseUrl } from "../Auth/axios";

const PickGearDate = () => {
  const [date, setDate] = useState("");

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    BaseUrl()
      .post(`${process.env.REACT_APP_API_URL}pickUp/addDate`, { date: date })
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  console.log(date);
  return (
    <div className="componentCont">
      <div className="pageHeader">
        <h2>Pick Up Date</h2>
      </div>
      <section className="pickUpGearCont">
        <div className="setPickUpDate">
          <h3>Choose a date for players to pick up gear</h3>
          <input
            id="pickUpDate"
            name="pickUpDate"
            type="date"
            value={date}
            onChange={handleChange}
          />
          <button onClick={onSubmit}>Add Date</button>
        </div>
        <div>
          <h3>Dates set to pick up gear</h3>
        </div>
      </section>
    </div>
  );
};

export default PickGearDate;
