import React from "react";
import { Link, Redirect } from "react-router-dom";

const userPage = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
    window.location.reload();
  };
  return (
    <div className="userStyles">
      <h1>You've successfully logged in!!!</h1>
      <Link to="/add">Add items</Link>
      <Link to="/view-applications">View all applicants</Link>
      <button className="logoutButton" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default userPage;
