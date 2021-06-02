import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";
import { useHistory } from "react-router-dom";
import guy from "../../imgs/Reference_1.png";
import Burger from "./burger/burger";
import Menu from "./menu/menu";

const NavBar = (props) => {
  const user = useRecoilValue(UserInfo);
  const [open, setOpen] = useState(false);
  const { push } = useHistory();
  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
    window.location.reload();
  };
  return (
    <nav>
      <div className="nav">
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
        <div className="navLinks">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
