import React from 'react'
import { useTranslation } from "react-i18next";

const Info = () => {

    const { t } = useTranslation("global");

  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award about__icon'></i>
            <h3 className="about__title">
                {t("about.about__experience")}
            </h3>

            <span className="about__subtitle">
                7 {t("about.about__months")}
            </span>
        </div>

        <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">
                {t("about.about__projects")}
            </h3>

            <span className="about__subtitle about__icon">
                2 {t("about.about__work")}
            </span>
        </div>

        <div className="about__box">
            <i className='bx bx-support about__icon' ></i>
            <h3 className="about__title">
                {t("about.about__availability")}
            </h3>

            <span className="about__subtitle">
                Online 24/7
            </span>
        </div>
    </div>
  )
}

export default Info