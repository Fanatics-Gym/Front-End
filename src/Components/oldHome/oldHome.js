import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import Logo from "../../imgs/Logo.JPG";
import { data } from "./oldHomeData";
import ShopAtom from "../../Recoil/atom/shop";
import ItemPreview from "./itemPreview";
import { BaseUrl } from "../Auth/axios";
import { Link } from "react-router-dom";
import PictureSlide from "./picture_slider";

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
    <div className="newHome">
      {/* <h2 className="subtitle">Home</h2> */}
      <div className="NewHomeCont">
        <div className="logoImg">
          <img src={Logo} />
        </div>
        <div className="newHomeText">
          <section className="sectionCont">
            <h2 className="sectionSubtitle">Football League</h2>
            <p>{data[0]}</p>
          </section>
          {/* <section className="sectionCont">
            <h2 className="sectionSubtitle">Shop</h2>
            <div className="shopPreview">
              {shopItems.map((item) => (
                <ItemPreview key={item.id} item={item} />
              ))}
            </div>
          </section> */}
          {/* <section className="sectionCont">
            <h2>Gear</h2>
            <PictureSlide />
          </section> */}
          <section className="sectionCont">
            <h2 className="sectionSubtitle">About</h2>
            <p>Learn more about the owner and what we represent</p>
            <div className="linksCont">
              <Link className="aboutLink" to="/represent">
                Represent
              </Link>
              <Link className="aboutLink" to="/about">
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
