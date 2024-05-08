import React from "react";
import "./Footer.scss";
import logo from "../../static/Images/Logo/Mohamed_Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGooglePlusG,
  faPinterest,
  faLinkedinIn,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer">
          <div className="BrandLogo">
            <img src={logo} alt="BRAND LOGO" width="250px" height="40%" />
          </div>

          <div className="BrandCopyRights">
            <p className="copyRight">
              &copy;Brand Copy Rights Goes Here powerd By Mohamed Ashraf.
            </p>
          </div>

          <div className="BrandSocialMedia">
            <FontAwesomeIcon className="socialMediaIcons" icon={faFacebookF} />
            <FontAwesomeIcon className="socialMediaIcons" icon={faTwitter} />
            <FontAwesomeIcon
              className="socialMediaIcons"
              icon={faGooglePlusG}
            />
            <FontAwesomeIcon className="socialMediaIcons" icon={faPinterest} />
            <FontAwesomeIcon className="socialMediaIcons" icon={faLinkedinIn} />
            <FontAwesomeIcon className="socialMediaIcons" icon={faYoutube} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
