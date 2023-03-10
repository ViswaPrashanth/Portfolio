import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text" style={{ whiteSpace: "break-spaces" }}>
        Take a Coffee and chat with me
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:viswaprasanth17@gmail.com" className="p-text">
            viswaprasanth17@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+918500356218 " className="p-text">
            +91 8500356218
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email "
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text" style={{ whiteSpace: "break-spaces" }}>
            Thankyou for getting in touch!
          </h3>
        </div>
      )}

      <div className="app__media">
        <div>
          <a
            href="https://www.linkedin.com/in/viswa-prasanth-chakravadhanula-7b2114161/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/viswaprasanth1"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/prashaaaanth___09/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsInstagram />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/viswa.prasanth.52/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/[+918500356218]"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsWhatsapp />
          </a>
        </div>
        <div>
          <a
            href="https://viswaprasanth1.hashnode.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiHashnode />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
