import React from "react";

const ApplicationView = ({ application }) => {
  return (
    <div className="userApplication">
      <h3>Player Info</h3>
      <p>
        Name: {application.first_name} {application.last_name}
      </p>
      <p>Email: {application.email}</p>
      <p>Phone Number: {application.phone}</p>
      <p>Date of Birth: {application.DOB}</p>
      <p>Alt-Phone: {application.Altphone}</p>
      <h3>Verification Info</h3>
      <p>Drivers License #: {application.Drivers_license}</p>
      <p>DL Expiration: {application.DL_Expiration}</p>
      <p>Address: {application.address}</p>
      <p>City: {application.city}</p>
      <p>State: {application.address_state}</p>
      <p>Zip Code: {application.zip}</p>
      <h3>Emergency Info</h3>
      <p>
        Name: {application.Em_First} {application.Em_Last}
      </p>
      <p>Relation: {application.relation}</p>
      <p>Phone Number: {application.em_phone}</p>
      <h3>Application Status</h3>
      <p>Status: {application.status}</p>
    </div>
  );
};

export default ApplicationView;
