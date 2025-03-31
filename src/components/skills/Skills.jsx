import React from 'react'
import "../../styles/skills/Skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Designer from './Designer';
import Others from './Others';
import { useTranslation } from "react-i18next";

const Skills = () => {

  const { t } = useTranslation("global");


  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">
            Skills
        </h2>

        <span className="section__subtitle"> {t("skills.skills__subtitle")} </span>

        <div className='skills__container container grid'>
            <Frontend />
            <Backend />
            <Designer />
            <Others />
        </div>
    </section>
  )
}

export default Skills