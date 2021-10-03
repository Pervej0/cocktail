import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-5 text-gray-300">
        <div className="text-center py-5">
          <h1 className="text-3xl">DD-Drink</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos ad eum nam.
          </p>
        </div>
        <div className="icons">
          <ul className="flex justify-center items-center">
            <li>
              <FontAwesomeIcon icon={faYoutube} size="lg"></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faFacebook} size="lg"></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} size="lg"></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon>
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </div>
      <div className="last-footer bg-gray-900 py-4">
        <p className="text-gray-400">Copyright &copy;2020. Design By Pervej</p>
      </div>
    </footer>
  );
};

export default Footer;
