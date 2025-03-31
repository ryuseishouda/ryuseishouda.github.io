import React from 'react'
import { useTranslation } from 'react-i18next';

const Backend = () => {

    const { t } = useTranslation("global");


  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Backend
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">TYPESCRIPT</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">NODEJS</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">NESTJS</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">MONGODB</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">POSTGRESQL</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">DOCKER</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend