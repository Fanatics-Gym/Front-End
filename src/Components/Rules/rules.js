import React from "react";
import RulesHeader from "../../imgs/rules.png";
import { rulesData } from "./rulesData";
import exhibitA from "../../imgs/blocking.png";

const Rules = () => {
  return (
    <div className="componentCont">
      <div className="rulesCont">
        <img className="rulesHeader" src={RulesHeader} />
        <section className="intro">
          <p>{rulesData[0]}</p>
        </section>
        <section className="rulesSection">
          <h3>Kickoff</h3>
          <ul>
            {rulesData[1].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Onside Kick</h3>
          <ul>
            {rulesData[2].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Punting</h3>
          <ul>
            {rulesData[3].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>PAT and 2-Point Conversion</h3>
          <ul>
            {rulesData[4].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>After Safety</h3>
          <ul>
            {rulesData[5].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Running and Receiving</h3>
          <ul>
            {rulesData[6].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Blocking</h3>
          <ul>
            {rulesData[7].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <div className="demo">
          <h2>Exhibit A</h2>
          <img src={exhibitA} alt="demonstration visually" />
        </div>
        <section className="rulesSection">
          <h3>Defense</h3>
          <ul>
            {rulesData[8].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Penalties</h3>
          <ul>
            {rulesData[10].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
        <section className="rulesSection">
          <h3>Playoffs</h3>
          <ul>
            {rulesData[11].map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Rules;
