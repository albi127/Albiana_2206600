import React from "react";
import "./intro.css";
import bg from "../../asset/profile.png";
import { Link } from "react-scroll";
import btnImg from "../../asset/hire.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Albi</span> <br />
          From University Education Indonesia
        </span>
        <p className="introPara">
          I am from the computer science education departement, and i'm learning
          about React JS
        </p>
        <Link>
          <button className="btn">
            <img
              src={btnImg}
              alt="Hire Me"
              className="btnImg"
              style={{ width: "50px", height: "35px" }}
            />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
