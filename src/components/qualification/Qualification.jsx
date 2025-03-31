import { useState } from "react";
import "../../styles/qualification/Qualification.css";
import { useTranslation } from "react-i18next";

const Qualification = () => {

    const { t } = useTranslation("global");

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title"> {t("qualification.qualification__title")} </h2>
      <span className="section__subtitle"> {t("qualification.qualification__subtitle")} </span>
      
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ingeniero de Software</h3>
                <span className="qualification__subtitle">
                  SENATI Escuela de idiomas
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - {t("qualification.qualification__present")}
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> {t("qualification.qualification__education-course1")} </h3>
                <span className="qualification__subtitle">
                  Udemy - Online
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> {t("qualification.qualification__education-course2")} </h3>
                <span className="qualification__subtitle">
                  Udemy - Online
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title"> {t("qualification.qualification__education-course3")} </h3>
                <span className="qualification__subtitle">
                  Udemy - Online
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> {t("qualification.qualification__education-course4")} </h3>
                <span className="qualification__subtitle">
                  Udemy - Online
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Prácticante</h3>
                <span className="qualification__subtitle">
                  SENATI Escuela de idiomas
                  <br />
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2025 - Actualidad
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification