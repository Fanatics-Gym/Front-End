import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import { useHistory } from "react-router-dom";
import guy from "../../imgs/Reference_1.png";
import Burger from "./burger/burger";

const NavBar = (props) => {
  const user = useRecoilValue(UserInfo);
  const { push } = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
    window.location.reload();
  };
  const userDiv = () => {
    if (user.userInfo) {
      if (user.userInfo.userType === "Admin") {
        return (
          <div className="navLinks">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/admin">
              Admin
            </Link>
            <Link className="links" onClick={logout}>
              Logout
            </Link>
          </div>
        );
      } else if (user.userInfo.userType === "Player") {
        return (
          <div className="navLinks">
            <Link className="links" to="/player-profile">
              Stats
            </Link>
            <Link className="links" to="/player">
              Player
            </Link>
            <Link className="links" onClick={logout}>
              Logout
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="navLinks">
          <Link className="links" to="/login">
            Login
          </Link>
        </div>
      );
    }
  };
  return (
    <nav className="nav">
      <div className="navLogo">
        <Link className="linkHome" to="/">
          <div className="imgCont">
            <img src={guy} alt="fanatics logo" />
          </div>
        </Link>
        <div className="navLinksLeft">
          <Link className="links" to="/about">
            About
          </Link>
          <Link className="links" to="/teams">
            Teams
          </Link>
          <Link className="links" to="/rules">
            Rules
          </Link>
          <Link className="links">Contact</Link>
        </div>
      </div>
      <Burger />
    </nav>
  );
};

export default NavBar;
