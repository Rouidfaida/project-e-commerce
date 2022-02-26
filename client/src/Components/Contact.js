import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [result, showresult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apjujjb",
        "template_mt3m2ig",
        e.target,
        "Yf_lTAux8arGXAkGN"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);
  return (
    <div className="contact-page">
      <img
        src="https://www.prodefence.org/wp-content/uploads/2019/11/contact_pdc.jpg"
        alt=""
      />
      <div className="contact-section">
        <h1>Contact Us</h1>
        <p> sfax, 3058</p>
        <p>(+216) 22 152 439</p>
        <p>rouid.faida@yahoo.fr</p>
        <p>
          <h2>Or Just By filling the Form</h2>
        </p>
      </div>

      <div className="form-zone">
        <form onSubmit={sendEmail}>
          <div className="text_field">
            <input type="text" name="fullname" required />
            <span></span>
            <label>Fullname</label>
          </div>
          <div className="text_field">
            <input type="email" name="email" required />
            <label>Email</label>
            <span></span>
          </div>
          <div className="text_field">
            <input
              type="text"
              name="message"
              required
              className="message-contact"
            />
            <span></span>

            <label>your message here</label>
          </div>
          {/* <button type="submit">Send Message</button> */}
          <input type="submit" value="Send Message" className="submit-input" />
          <div className="row">
            {result ? (
              <p>
                Your message has been successfully sent. we will contact you
                soon
              </p>
            ) : null}
          </div>
        </form>
      </div>
      <div className="social-menu con">
        <SocialIcon url="https://www.facebook.com/faida.rouid/" />
        <SocialIcon url="https://www.instagram.com/faidarouid" />
        <SocialIcon url="https://www.linkedin.com/in/faida-rouid-36654965/" />
      </div>
    </div>
  );
};

export default Contact;
