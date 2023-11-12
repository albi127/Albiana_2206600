import React, { useRef } from "react";
import "./sponsor.css";
import Sponsor1 from "../../asset/sponsor (1).png";
import Sponsor2 from "../../asset/sponsor (2).png";
import Sponsor3 from "../../asset/sponsor (3).png";
import Sponsor4 from "../../asset/sponsor (4).png";
import Telpon1 from "../../asset/telpon (1).png";
import Telpon2 from "../../asset/telpon (2).png";
import Telpon3 from "../../asset/telpon (3).png";
import Telpon4 from "../../asset/telpon (4).png";
import emailjs from "@emailjs/browser";

const Sponsor = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7d0yfi7",
        "template_v046l87",
        form.current,
        "BECZO-BdC7bB3mS2Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Sponsor</h1>
        <p className="clientDesc">
          Join us on the journey to success as a valued sponsor and showcase
          your commitment to innovation and excellence.
        </p>
        <div className="clientImgs">
          <img
            src={Sponsor1}
            alt="Client"
            className="sponsorImg"
            style={{ width: "200px", height: "200px" }}
          />
          <img
            src={Sponsor2}
            alt="Client"
            className="sponsorImg"
            style={{ width: "200px", height: "200px" }}
          />
          <img
            src={Sponsor3}
            alt="Client"
            className="sponsorImg"
            style={{ width: "200px", height: "200px" }}
          />
          <img
            src={Sponsor4}
            alt="Client"
            className="sponsorImg"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contacDesc">
          Pliss call out the form below any works opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={Telpon1} alt="Telpon1" className="link" />
            <img src={Telpon2} alt="Telpon2" className="link" />
            <img src={Telpon3} alt="Telpon3" className="link" />
            <img src={Telpon4} alt="Telpon4" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Sponsor;
