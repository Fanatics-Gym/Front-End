import React from "react";
import "../../scss/userPage.scss";
import { Link } from "react-router-dom";
const userPage = () => {
  return (
    <div className="userStyles">
      <h1>You've successfully logged in!!!</h1>
      <Link to="/addItems">Add items</Link>
    </div>
  );
};

export default userPage;
