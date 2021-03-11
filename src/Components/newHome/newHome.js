import React from "react";
import { useRecoilValue } from "recoil";
import Logo from "../../imgs/Logo.JPG";
import { data } from "./newHomeData";
import ShopAtom from "../../Recoil/atom/shop";

const NewHome = () => {
  const shopItems = useRecoilValue(ShopAtom);
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
          <section class="sectionCont">
            <h2 class="sectionSubtitle">Shop</h2>
            <div>{shopItems.map((item) => item)}</div>
          </section>
          <section></section>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
