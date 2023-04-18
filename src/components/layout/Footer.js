import React from "react";
//import { Link } from "react-router-dom";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <ul className="sci">
              <li>
                <a href="www.linkedin.com/in/sivakumar-kumar-1a4a0795">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Sivakumarrajendran2310/Ece.git">
                  <i className="fab fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i className="fab fa-youtube" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright © 2023 ECE students. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
