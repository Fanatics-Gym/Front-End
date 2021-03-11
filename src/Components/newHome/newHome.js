import React from "react";
import Logo from "../../imgs/Logo.JPG";

const NewHome = () => {
  return (
    <div class="newHome">
      {/* <h2 class="subtitle">Home</h2> */}
      <div class="NewHomeCont">
        <div class="logoImg">
          <img src={Logo} />
        </div>
        <div className="newHomeText">
          <section>
            <h2 class="sectionSubtitle">Football League</h2>
          </section>
          <section></section>
          <section></section>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
