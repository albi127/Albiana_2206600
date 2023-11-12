import React from "react";
import "./skills.css";
import UIDesign from "../../asset/code.png";
import Game from "../../asset/game.png";
import Volley from "../../asset/volley (1).png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTittle">What I do</span>
      <span className="skillDesc">
        My daily life is as a student, so sometimes I study things I like,
        including learning web programming, playing games and playing
        volleyball. Apart from that, I quite like web programs and volleyball.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img
            src={UIDesign}
            alt="UIDesign"
            className="skillBarImg"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="skillBarText">
            <h2>Web Programing</h2>
            <p>
              Trying to learn something new about programing, you can contact
              here
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={Game}
            alt="Game"
            className="skillBarImg"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="skillBarText">
            <h2>Games</h2>
            <p>
              It's just for relax, you can play game with me, you can contact
              here
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img
            src={Volley}
            alt="Volley"
            className="skillBarImg"
            style={{ width: "200px", height: "200px" }}
          />
          <div className="skillBarText">
            <h2>Volleyball</h2>
            <p>
              Volleyball it's so beatiful game, if you wanna play you can
              contact here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
