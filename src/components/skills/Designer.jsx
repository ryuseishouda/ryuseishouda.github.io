import React from 'react'
import { useTranslation } from 'react-i18next'

const Designer = () => {

    const { t } = useTranslation("global");


  return (
    <div className="skills__content">
        <h3 className="skills__title">
            Diseño
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">FIGMA</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">PHOTOSHOP</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")}</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">CANVAS</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")}</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-badge-check'></i>

                    <div className="">
                        <h3 className="skills__name">ADOBE ILLUSTRATOR</h3>
                        <span className="skills__level">{t("skills.skills__level-basic")}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Designer