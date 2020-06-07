import joggin from "../../imgs/jogging.png";
import jake from "../../imgs/owner.jpg";
import React from "react";
import "../../scss/aboutPage.scss";

function adminInfo() {
  return (
    <div className="about">
      <div className="header">
        <h1>Fanatics Gym Members</h1>
        <h3>
          A hardworking, dedicated indivdual, who loves to have a good time
        </h3>
        <img src={joggin} alt="Four hands grabbing one anothers wrist, unity" />
      </div>
      <div className="aboutContext">
        <h1>Goals</h1>
        <div className="aboutGoals">
          <h2> 1. Best Products </h2>
          <p>
            Create Durable, long lasting, clean, and safe design. Our products
            are able to withstand the test of time and are always at the
            forefront of sustainable innovation. Our products are produced in an
            ethical manner and comply with all applicable legal and regulatory
            saftey requirements
          </p>
        </div>
        <div className="aboutGoals">
          <h2>2. Best Service</h2>
          <p>
            Provide Top Notch, second to none, unriveled service. Everything
            from members relations, customer service, and our professinal
            partnerships,
            <b> we make every situation and event a memoriable experience.</b>
          </p>
        </div>
        <div className="aboutGoals">
          <h2>3. Global Influence</h2>
          <p>
            We positively effect every single person on the globe.{" "}
            <b>
              In all of our practices, we make sure that we provide impact on
              every man, woman, and child on this planet.
            </b>
          </p>
        </div>
      </div>
      <div className="aboutFounder">
        <h1>Founder</h1>
        <img src={jake} alt="creator of the company" />
        <p>
          <b>Hello, I'm Jake Barbosa!</b> I created this brand to inspire others
          to be healthy and positive. I'm passionate about exercising, and I
          know a lot of people share my passion. My vision with Fanatics Gym was
          to create core values that will not only represent the brand but a
          life style that is full of positivity, and being healthy.
        </p>
      </div>
    </div>
  );
}

export default adminInfo;
