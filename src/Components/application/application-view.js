import React from "react";

const ApplicationView = ({ application }) => {
  return (
    <div className="userApplication">
      <p>
        Name: {application.first_name} {application.last_name}
      </p>
      <p>Email: {application.email}</p>
      <p>Phone Number: {application.phone}</p>
      <p>Date of Birth: {application.DOB}</p>
      <p>Alt-Phone: {application.Altphone}</p>
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
      <p>{application.status === false ? "Accepted" : "Review"}</p>
    </div>
  );
};

export default ApplicationView;
