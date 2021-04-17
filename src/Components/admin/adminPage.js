import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="userStyles">
      <h1>You've successfully logged in!!!</h1>
      <Link to="/add">Add items</Link>
      <Link to="/view-applications">View all applicants</Link>
    </div>
  );
};

export default AdminPage;
