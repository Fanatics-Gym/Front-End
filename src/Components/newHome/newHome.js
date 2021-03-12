import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Logo from "../../imgs/Logo.JPG";
import { data } from "./newHomeData";
import ShopAtom from "../../Recoil/atom/shop";
import ItemPreview from "./itemPreview";
import { BaseUrl } from "../Auth/axios";
import { Link } from "react-router-dom";

const NewHome = () => {
  const [shopItems, setShopItems] = useRecoilState(ShopAtom);
  useEffect(() => {
    BaseUrl()
      .get(`items`)
      .then((res) => {
        setShopItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div class="newHome">
      {/* <h2 class="subtitle">Home</h2> */}
      <div class="NewHomeCont">
        <div class="logoImg">
          <img src={Logo} />
        </div>
        <div className="newHomeText">
          <section class="sectionCont">
            <h2 class="sectionSubtitle">Football League</h2>
            <p>{data[0]}</p>
          </section>
          {/* <section class="sectionCont">
            <h2 class="sectionSubtitle">Shop</h2>
            <div className="shopPreview">
              {shopItems.map((item) => (
                <ItemPreview key={item.id} item={item} />
              ))}
            </div>
          </section> */}
          <section class="sectionCont">
            <h2 class="sectionSubtitle">About</h2>
            <p>Learn more about the owner and what we represent</p>
            <div class="linksCont">
              <Link class="aboutLink" to="/represent">
                Represent
              </Link>
              <Link class="aboutLink" to="/about">
                About
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
