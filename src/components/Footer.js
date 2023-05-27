import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <h4>Your Email Address</h4>
      <input type="text" />
      <button>Sign up</button>
      <div className="icons">
        <a href="https://www.facebook.com/">
          <FaFacebook className="icon" />
        </a>
        <a href="https://mail.google.com">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://telegram.org/">
          <FaTelegram className="icon" />
        </a>
      </div>
      <p className="copyright">
        Copyright © 2023 Yeabtsega's E-commerce Shop | Designed by Yeabtsega
        Yeshidnber
      </p>
    </div>
  );
}

export default Footer;
