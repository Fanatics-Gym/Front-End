import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import PickUpDatesAtom from "../../Recoil/atom/pickUpDatesAtom";
import { BaseUrl } from "../Auth/axios";

const PickGearDate = () => {
  const [date, setDate] = useState({ date: "", time: "" });
  const [pickUpDates, setPickUpDates] = useRecoilState(PickUpDatesAtom);

  useEffect(() => {
    BaseUrl()
      .get(`pickUp/`)
      .then((res) => {
        setPickUpDates(res.data);
      });
  }, []);

  const handleChange = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    BaseUrl()
      .post(`pickUp/addDate`, { date: date })
      .then((res) => {
        setPickUpDates((old) => [...old, res.data]);
      })
      .catch((err) => console.log(err));
  };
  console.log(pickUpDates);
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
            name="date"
            type="date"
            value={date.date}
            onChange={handleChange}
          />
          <input
            id="pickUpTime"
            name="time"
            type="time"
            onChange={handleChange}
            value={date.time}
          />

          <button onClick={onSubmit}>Add Date</button>
        </div>
        <div>
          <h3>Dates set to pick up gear</h3>
          {pickUpDates.map((date) => (
            <h4>{date.date}</h4>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PickGearDate;
