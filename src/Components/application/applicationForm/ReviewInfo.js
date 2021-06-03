import React from "react";

const ReviewInfo = (application) => {
  const values = application.values;

  return (
    <div className="reviewCont">
      <section>
        <h3>Player Info</h3>
        <p>
          <b>Name: </b>
          {values.info.first_name} {values.info.mi}. {values.info.last_name}
        </p>
        <p>
          <b>Email: </b>
          {values.info.email}
        </p>
        <p>
          <b>Phone Number: </b>({values.info.phone.toString().slice(0, 3)})-
          {values.info.phone.toString().slice(3, 6)}-
          {values.info.phone.toString().slice(6)}
        </p>
        <p>
          <b>Alt-Phone: </b>({values.info.Altphone.toString().slice(0, 3)})-
          {values.info.Altphone.toString().slice(3, 6)}-
          {values.info.Altphone.toString().slice(6)}
        </p>
        <p>
          <b>Date of Birth: </b>
          {values.info.DOB}
        </p>
      </section>
      <section>
        <h3>Emergency Info</h3>
        <p>
          <b>Name: </b>
          {values.info.Em_First} {values.info.Em_Last}
        </p>
        <p>
          <b>Relation: </b>
          {values.info.relation}
        </p>
        <p>
          <b>Phone Number: </b>({values.info.em_phone.toString().slice(0, 3)})-
          {values.info.em_phone.toString().slice(3, 6)}-
          {values.info.em_phone.toString().slice(6)}
        </p>
      </section>
      <section>
        <h3>Verification Info</h3>
        <p>
          <b>Drivers license#: </b>
          {values.info.Drivers_license}
        </p>
        <p>
          <b>Expiration: </b>
          {values.info.DL_Expiration}
        </p>
        <p>
          <b>Address: </b>
          {values.info.address}
        </p>
        <p>
          {values.info.city}, {values.info.address_state} {values.info.zip}
        </p>
      </section>
      <section>
        <h3>Current Residence</h3>
        <p>
          <b>Address: </b>
          {values.info.current_address}
        </p>
        <p>
          {values.info.current_city}, {values.info.current_state}{" "}
          {values.info.current_zip}
        </p>
      </section>
    </div>
  );
};

export default ReviewInfo;
