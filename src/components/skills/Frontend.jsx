import React from 'react'
import { useTranslation } from 'react-i18next';

const Frontend = () => {

    const { t } = useTranslation("global");


  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Frontend
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">{t("skills.skills__level-advanced")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">CSS</h3>

                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">JAVASCRIPT</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">REACT</h3>
                         <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">ANGULAR</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">MATERIAL UI</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend