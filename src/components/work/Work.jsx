import Works from './Works';
import "../../styles/work/Work.css";
import { useTranslation } from "react-i18next";

const Work = () => {

  const { t } = useTranslation("global");
  
  return (
    <section className="work section" id='portfolio'>
      <h2 className="section__title">{t("work.work__subtitle")}</h2>
      <span className="section__subtitle">{t("work.work__title")}</span>
        
      <Works />
    </section>
  )
}

export default Work