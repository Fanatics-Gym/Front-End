import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";

const AdminPage = (props) => {
  const userInfo = useRecoilValue(UserInfo);
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
    window.location.reload();
  };

  console.log(userInfo);
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

export default AdminPage;
