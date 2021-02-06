import React from "react";
import FormField from "../../Shop/Form/formField";
import PlayerInfo from "./playerInfo";

const ApplicationForm = () => {
  return (
    <div className="applicationForm">
      <div className="applicationHeader">
        <h2>Application</h2>
      </div>
      <h2>Fill out all the Fields</h2>
      <div>
        <PlayerInfo />
      </div>
    </div>
  );
};

export default ApplicationForm;
