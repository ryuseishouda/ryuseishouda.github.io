import "../../styles/translate/Translate.css";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const Translate = () => {

    const [showOptions, setShowOptions] = useState(false);
     const [t, i18n] = useTranslation("global");

    const toggleOptions = (e) => {
        setShowOptions(!showOptions);
    }

    const handleOptionLanguage = (language) => {
        i18n.changeLanguage(language.toLowerCase());
        setShowOptions(false);
        localStorage.setItem('language', language.toLowerCase());
    };

    useEffect(() => {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                i18n.changeLanguage(storedLanguage);
            }
        }, []);
    

    return (
        <section className="translate__container">
            <button className="translate__buton" onClick={toggleOptions} >
                <i class='bx bx-transfer-alt translate__icon'></i>
            </button>

            {
                showOptions && (
                    <div className="translate__option-deployed">
                        <p className="options" onClick={() => handleOptionLanguage("es")}>Español</p>
                        <p className="options" onClick={() => handleOptionLanguage("en")}>Ingles</p>
                    </div>
                )
            }
        </section>
    )
}

export default Translate