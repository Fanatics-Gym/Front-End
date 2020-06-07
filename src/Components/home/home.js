import React, { useEffect } from "react";
import Logo from "../../imgs/Logo.JPG";
import "../../scss/home.scss";
import { PageView } from "../../analyicts";

const HomePage = () => {
  useEffect(() => {
    PageView();
  }, []);
  return (
    <div className="headerContainer">
      <div className="headerLogo">
        <h2 className="subtitle">Represent</h2>
        <div className="img">
          <img src={Logo} alt="Fit Man" className="logo" />
        </div>
      </div>
      <div className="headerContent">
        <div className="coreValues">
          <h1>Our Mission</h1>
          <p>
            Our Mission as a brand and community is to bring the people of the
            world together in a way where they can connect and appreciate one
            another with the association of our brand, products, and services.{" "}
          </p>
        </div>
        <div className="coreValues">
          <h2>Core values</h2>
          <h3>
            These core values will help maintain a healthy community and bring
            value to our brand:
          </h3>
        </div>
        <div>
          <h2>-Respect</h2>
          <p>
            {" "}
            <b>Everyone matters, Everyone contributes.</b> As a community, we
            value and consider everyone's thoughts, feelings, and opinions. When
            interacting with someone who is not part of our family yet, we
            engage and value them as if they were one of our own.
          </p>
        </div>
        <div className="coreValues">
          <h2>-Integrity</h2>
          <p>
            As Fanatics members, we are truthful, honest, and clear. We say what
            we mean, mean what we say, and always do the right thing (Even when
            no one is looking).
          </p>
        </div>
        <div>
          <h2>-Commitment</h2>
          <p>
            We support and defend one another. We have strength of character and
            everything that we do is for the betterment and best interest of
            each other
          </p>
        </div>
        <div className="coreValues">
          <h2>-Inspire</h2>
          <p>
            As a fanatics gym member, it's important to motivate and inspire
            those around you. Let people know they CAN, so we can create an
            atmosphere and environment where anything is possible(especially
            when working together).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
