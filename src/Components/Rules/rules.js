import React from "react";
import RulesHeader from "../../imgs/rules.png";
import { rulesData } from "./rulesData";

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
      </div>
    </div>
  );
};

export default Rules;
