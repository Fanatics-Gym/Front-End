import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import cart from "../../imgs/cart.png";
import UserInfo from "../../Recoil/atom/userData";
import CheckoutSelector from "../../Recoil/selector/checkoutSelector";

const NavBar = () => {
  const [navDrop, setNavDrop] = useState(false);
  const { listLength } = useRecoilValue(CheckoutSelector);
  const userInfo = useRecoilValue(UserInfo);
  const adjust = () => {
    if (window.screen.width <= 500) {
      return <div></div>;
    }
  };
  const userDiv = () => {
    if (userInfo.user) {
      if (userInfo.user.userType === "Admin") {
        return (
          <div className="navLinks">
            <Link className="links" to="/">
              Home
            </Link>
          </div>
        );
      } else if (userInfo.user.userType === "Player") {
        console.log("Player");
      }
    } else {
      return (
        <div className="navLinks">
          <Link className="links" to="/">
            Home
          </Link>
          {/* <Link className="links" to="/shop">
      Shop
    </Link> */}
          <Link className="links" to="/football">
            Football
          </Link>
          {/* <Link className="links" to="/cart">
      <img src={cart} />
      {listLength !== 0 ? (
        <span class="badge">
          <h3 class="badgeNum">{listLength}</h3>
        </span>
      ) : (
        <span></span>
      )}
    </Link> */}
        </div>
      );
    }
  };
  userDiv();
  console.log(listLength);
  return (
    <nav className="nav">
      <div className="navLogo">
        <Link class="linkHome" to="/">
          <h1>Fanatics Gym</h1>
        </Link>
      </div>
      {userDiv()}
    </nav>
  );
};

export default NavBar;
