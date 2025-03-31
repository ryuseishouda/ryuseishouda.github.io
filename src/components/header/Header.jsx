import "../../styles/header/Header.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {

    const [ toggle, showMenu ] = useState(false);
    const [t, i18n] = useTranslation("global");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo"> {'<Shouda />'} </a>

            <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>
                            {t("header.nav__home")}
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>
                            {t("header.nav__about")}
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>
                            {t("header.nav__skills")}
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            {t("header.nav__services")}
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>
                            {t("header.nav__portfolio")}
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            {t("header.nav__contact")}
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" onClick={ ()=> showMenu(!toggle) } ></i>
            </div>
            <div className="nav__toggle" onClick={ ()=> showMenu(!toggle) } >
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header