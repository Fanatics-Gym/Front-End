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
          {values.first_name} {values.last_name}
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
      </section>
    </div>
  );
};

export default ReviewInfo;
