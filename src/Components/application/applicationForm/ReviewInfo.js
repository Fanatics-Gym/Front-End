import React from "react";

const ReviewInfo = (application) => {
  const values = application.values;
  console.log(values);
  return (
    <div className="reviewCont">
      <section>
        <h3>Player Info</h3>
        <p>
          <b>Name: </b>
          {values.first_name} {values.mi}. {values.last_name}
        </p>
        <p>
          <b>Email: </b>
          {values.email}
        </p>
        <p>
          <b>Phone Number: </b>({values.phone.toString().slice(0, 3)})-
          {values.phone.toString().slice(3, 6)}-
          {values.phone.toString().slice(6)}
        </p>
        <p>
          <b>Alt-Phone: </b>({values.Altphone.toString().slice(0, 3)})-
          {values.Altphone.toString().slice(3, 6)}-
          {values.Altphone.toString().slice(6)}
        </p>
        <p>
          <b>Date of Birth: </b>
          {values.DOB}
        </p>
      </section>
      <section>
        <h3>Emergency Info</h3>
        <p>
          <b>Name: </b>
          {values.Em_First} {values.Em_Last}
        </p>
        <p>
          <b>Relation: </b>
          {values.relation}
        </p>
        <p>
          <b>Phone Number: </b>({values.em_phone.toString().slice(0, 3)})-
          {values.em_phone.toString().slice(3, 6)}-
          {values.em_phone.toString().slice(6)}
        </p>
      </section>
      <section>
        <h3>Verification Info</h3>
        <p>
          <b>Drivers license#: </b>
          {values.Drivers_license}
        </p>
        <p>
          <b>Expiration: </b>
          {values.DL_Expiration}
        </p>
        <p>
          <b>Address: </b>
          {values.address}
        </p>
        <p>
          {values.city}, {values.address_state} {values.zip}
        </p>
      </section>
      <section>
        <h3>Current Residence</h3>
        <p>
          <b>Address: </b>
          {values.address}
        </p>
        <p>
          {values.city}, {values.address_state} {values.zip}
        </p>
      </section>
    </div>
  );
};

export default ReviewInfo;
