import React from "react";

const ApplicationView = ({ application }) => {
  return (
    <div>
      <p>{application.first_name}</p>
      <p>{application.last_name}</p>
      <p>{application.email}</p>
      <p>{application.phone}</p>
      <p>{application.DOB}</p>
      <p>{application.Altphone}</p>
      <p>{application.Drivers_license}</p>
      <p>{application.DL_Expiration}</p>
      <p>{application.address}</p>
      <p>{application.city}</p>
      <p>{application.address_state}</p>
      <p>{application.zip}</p>
      <p>{application.Em_First}</p>
      <p>{application.Em_Last}</p>
      <p>{application.relation}</p>
      <p>{application.em_phone}</p>
      <p>{application.status}</p>
    </div>
  );
};

export default ApplicationView;
