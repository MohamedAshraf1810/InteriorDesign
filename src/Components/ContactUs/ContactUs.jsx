import React from "react";
import "./ContactUs.scss";
import pinIcon from "../../static/Images/contact/pin.png";
import phoneIcon from "../../static/Images/contact/smartphone.png";
import emailIcon from "../../static/Images/contact/email.png";

const ContactUs = () => {
  return (
    <>
      <section className="Contactus">
        <div className="contactus-Header">
          <h2 className="C_Header">Contact Us</h2>
        </div>

        <div className="contactWays">
          {contactWay.map(({ id, icon, info_1, info_2 }) => (
            <div className="contactWay" key={id}>
              <img
                className="contactWay-Icon"
                src={icon}
                alt="..."
                width="40px"
                height="40px"
              />
              <br />
              <span className="contactWay-Info">{info_1}</span>
              <br />
              <span className="contactWay-Info">{info_2}</span>
            </div>
          ))}
        </div>

        <div className="contactFormDV">
          <div className="contactForm-Container">
            <form className="contactForm">
              <div className="contactFormPart1">
                <input className="FormInput" type="text" placeholder="*Your name" />
                <input className="FormInput" type="email" placeholder="*Your email" />
                <input className="FormInput" type="text" placeholder="Your phone" />
              </div>

              <div className="contactFormPart2 formTextAreaContainer ">
                <textarea className="MessageTextArea" name="Message" id="1" rows="4" placeholder="Your Message" ></textarea>
                <button className="sendMessageBTN">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactUs;

const contactWay = [
  {
    id: 1,
    icon: pinIcon,
    info_1: "301 The Greenhouse, Custard,",
    info_2: "Factory, London, E2 8DY.",
  },
  {
    id: 2,
    icon: phoneIcon,
    info_1: "(M) +44 (0) 123 456 7890",
    info_2: "(O) +44 (0) 123 456 7890",
  },
  {
    id: 3,
    icon: emailIcon,
    info_1: "no-reply@domain.com",
    info_2: "help@domain.com",
  },
];
