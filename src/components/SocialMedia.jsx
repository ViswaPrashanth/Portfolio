import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
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
  );
};

export default SocialMedia;
