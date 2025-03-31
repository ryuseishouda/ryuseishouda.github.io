import React from 'react'
import { useTranslation } from 'react-i18next'

const Others = () => {

    const { t } = useTranslation("global");


  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Otros
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">GIT</h3>
                        <span className="skills__level"> {t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">GITHUB</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">SONARQUBE</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">SWAGGUER</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">JEST</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">CYPRESS</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Others
