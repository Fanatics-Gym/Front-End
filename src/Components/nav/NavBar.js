import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import { useHistory } from "react-router-dom";
import guy from "../../imgs/newNav.jpg";
import Burger from "./burger/burger";
import Menu from "./menu/menu";

const NavBar = (props) => {
  const user = useRecoilValue(UserInfo);
  console.log(user);
  const [open, setOpen] = useState(false);
  const { push } = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
    window.location.reload();
  };
  if (window.screen.width >= 768) {
    return (
      <div className="nav">
        <div className="navLinksLeft">
          <Link className="links" to="/">
            Home
          </Link>
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
        <div className="imgCont">
          <Link className="linkHome" to="/">
            <img src={guy} alt="fanatics logo" />
          </Link>
        </div>
        {user.userInfo ? (
          <div className="navLinks">
            <Link className="links" to="/player">
              Dashboard
            </Link>
            <Link className="links" to="/login" onClick={logout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="navLinks">
            <Link className="links" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div className="imgCont">
          <Link className="linkHome" to="/">
            <img src={guy} alt="fanatics logo" />
          </Link>
        </div>
        <div className="navLinks">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    );
  }
};

export default NavBar;
