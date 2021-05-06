import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PickUpDatesAtom from "../../Recoil/atom/pickUpDatesAtom";
import UserInfo from "../../Recoil/atom/userData";
import { BaseUrl } from "../Auth/axios";

const PickGear = () => {
  const userId = useRecoilValue(UserInfo);
  const [pickUpDates, setPickUpDates] = useRecoilState(PickUpDatesAtom);
  const [gear, setGear] = useState({
    helmet: "",
    shoulderPads: "",
    pants: "",
    jeresy: "",
    backPlate: "",
    player_id: userId.user.id || null,
    date_id: "",
  });
  const handleChange = (e) => {
    setGear({
      ...gear,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    BaseUrl()
      .get(`${process.env.REACT_APP_API_URL}pickUp/`)
      .then((res) => {
        setPickUpDates(res.data);
      });
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    BaseUrl()
      .post(`${process.env.REACT_APP_API_URL}gear/add`, gear)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  console.log(gear);
  return (
    <form className="pickGearPage" onSubmit={onSubmit}>
      <div className="pickGearHeader">
        <h2>Pick Gear</h2>
      </div>
      <div className="pickGearContainer">
        <div className="pickGearSubHeader">
          <h3>
            What size are you? If you do not remember your size, fill out each
            section to the best of your memory. You will be able to try on the
            equipment before it is finalized, so if we have to adjust any sized,
            no problem.
          </h3>
        </div>
        <div className="pickGearInputs">
          <h3>Helmet: </h3>
          <span name="helmet" value={gear.helmet} onChange={handleChange}>
            <div>
              <input type="radio" name="helmet" value="M" />
              <label for="M">M</label>
            </div>
            <div>
              <input type="radio" name="helmet" value="L" />
              <label for="L">L</label>
            </div>
            <div>
              <input type="radio" name="helmet" value="XL" />
              <label for="XL">XL</label>
            </div>
          </span>
        </div>
        <div className="pickGearInputs">
          <h3>Shoulder Pads: </h3>
          <span
            name="shoulderPads"
            value={gear.shoulderPads}
            onChange={handleChange}
          >
            <div>
              <input type="radio" name="shoulderPads" value="M" />
              <label for="M">M</label>
            </div>
            <div>
              <input type="radio" name="shoulderPads" value="L" />
              <label for="L">L</label>
            </div>
            <div>
              <input type="radio" name="shoulderPads" value="XL" />
              <label for="XL">XL</label>
            </div>
          </span>
        </div>
        <div className="pickGearInputs">
          <h3>Jeresy: </h3>
          <span name="jeresy" value={gear.jeresy} onChange={handleChange}>
            <div>
              <input type="radio" name="jeresy" value="M" />
              <label for="M">M</label>
            </div>
            <div>
              <input type="radio" name="jeresy" value="L" />
              <label for="L">L</label>{" "}
            </div>
            <div>
              <input type="radio" name="jeresy" value="XL" />
              <label for="XL">XL</label>
            </div>
          </span>
        </div>
        <div className="pickGearInputs">
          <h3>Pants: </h3>
          <span name="pants" value={gear.pants} onChange={handleChange}>
            <div>
              <input type="radio" name="pants" value="M" />
              <label for="M">M</label>
            </div>
            <div>
              <input type="radio" name="pants" value="L" />
              <label for="L">L</label>
            </div>
            <div>
              <input type="radio" name="pants" value="XL" />
              <label for="XL">XL</label>
            </div>
          </span>
        </div>
        <div className="pickGearInputs">
          <h3>Back Plate - Do you want one?: </h3>
          <span name="backPlate" value={gear.backPlate} onChange={handleChange}>
            <div>
              <input type="radio" name="backPlate" value="Yes" />
              <label for="Yes">Yes</label>
            </div>
            <div>
              <input type="radio" name="backPlate" value="No" />
              <label for="No">No</label>
            </div>
          </span>
        </div>
        <div className="pickGearDate">
          <h3>Choose pick up date</h3>
          <span name="date_id" value={gear.date_id} onChange={handleChange}>
            {pickUpDates.map((date) => (
              <div>
                <input type="radio" name="date_id" value={date.id} />
                <label>{date.date}</label>
              </div>
            ))}
          </span>
        </div>
      </div>
      <div className="buttonCont">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default PickGear;
