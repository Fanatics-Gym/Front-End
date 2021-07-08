import React, { useState } from "react";

const CreateTeam = () => {
  const [team, setTeam] = useState({
    name: "",
    img: "",
  });

  const handleChange = (e) => {
    setTeam({
      ...team,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="createTeamCont">
      <div>
        <label>Name:</label>
        <input name="name" onChange={handleChange} value={team.name} />
      </div>
      <div>
        <label>Img:</label>
        <input name="img" onChange={handleChange} value={team.img} />
      </div>
      <button>Create</button>
    </div>
  );
};

export default CreateTeam;
