import React from "react";
import "./Footer.css";

import { FaHeart, FaArrowUp } from "react-icons/fa";

function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (

    <footer className="footer">

      <p>

        © 2026 Portfolio | Designed & Built with
        <FaHeart className="heart" />
        by <span>Oluwadunsin</span>

      </p>

      <button onClick={scrollTop}>
        <FaArrowUp/>
      </button>

    </footer>

  );

}

export default Footer;