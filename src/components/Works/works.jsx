import React from "react";
import "./works.css";
import Portfolio1 from "../../asset/kerja (2).jpg";
import Portfolio2 from "../../asset/kerja (3).jpg";
import Portfolio3 from "../../asset/kerja (4).jpg";
import Portfolio4 from "../../asset/kerja (5).jpg";
import Portfolio5 from "../../asset/kerja (6).jpg";
import Portfolio6 from "../../asset/kerja (7).jpg";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTittle">My Portfolio</h2>
      <span className="worksDesc">
        Detail-oriented front-end developer with a passion for creating seamless
        user experiences. Beyond coding, I'm a fitness enthusiast, always up for
        a challenging workout or a jog in the park.
      </span>
      <div className="worksImgs">
        <img
          src={Portfolio1}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          src={Portfolio2}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          src={Portfolio3}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          src={Portfolio4}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          src={Portfolio5}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
        <img
          src={Portfolio6}
          alt=""
          className="worksImg"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;
