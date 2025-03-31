import React from "react";
import "../../styles/footer/Footer.css";
import logo from "../../assets/logo.jpg";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const { t } = useTranslation("global");
  
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"><img src={logo} alt="AlanLogo" width={80} height={80} /></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
            
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
            
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
            
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2024, {t("footer.footer__copy")}
        </span>
      </div>
    </footer>
  );
};

export default Footer;