import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo11} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "testimonial", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      <a
        className="resume"
        href={images.ViswaPrasanth_Resume}
        download="ViswaPrasanth_Resume.pdf"
      >
        𝕽𝖊𝖘𝖚𝖒𝖊🚀
      </a>
      <div className="app__navbar-menu">
        {/* <HiMenu onClick={() => setToggle(true)} /> */}
        <HiMenu onClick={handleOnClick} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            initial={{ width: 0 }}
            animate={{ width: 300 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* <HiX onClick={() => setToggle(false)} /> */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={handleOnClick} />
            </motion.span>
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonial",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
