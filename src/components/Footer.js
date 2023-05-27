import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h4>your email adress</h4>
      <input type="text" />
      <button>Sign up</button>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <FaFacebook className="icon" />
        </a>
        <a href="https://mail.google.com">
          <FaMailBulk className="icon" />
        </a>
        <a href="https://telegram.org/">
          <FaTelegram className="icon" />
        </a>
      </div>
      <p className="copyright">
        Copyright © 2023 Kotebe 7th Day Adventist Church | Designed by Yeabtsega
        Yeshidnber
      </p>
    </div>
  );
}

export default Footer;
