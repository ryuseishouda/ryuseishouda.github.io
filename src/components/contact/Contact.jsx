import Swal from "sweetalert2";
import "../../styles/contact/Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("global");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/manedzod", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });
      
      if (response.ok) {
        Swal.fire({
          title: "Gracias!",
          text: "Correo enviado exitosamente.",
          icon: "success",
        });
        e.target.reset();
      } else {
        Swal.fire({
          title: "Oops...",
          text: "Hubo un error al enviar el mensaje.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "No se pudo enviar el mensaje.",
        icon: "error",
      });
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contact.contact__title")}</h2>
      <span className="section__subtitle">{t("contact.contact__subtitle")}</span>

      <div className="contact__container container grid">
        {/* Sección de Contacto */}
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.contact__talktome")}</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">{t("contact.contact__email")}</h3>
              <span className="contact__card-data">example@example.com</span>
              <a href="mailto:example@example.com" className="contact__button">
                {t("contact.contact__writeme")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+51 123456789</span>
              <a href="https://api.whatsapp.com/send?phone=986871236&text=Hola, tu portfolio se ve interesante, hablamos?" className="contact__button">
                {t("contact.contact__writeme")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-instagram contact__card-icon"></i>
              <h3 className="contact__card-title">Instagram</h3>
              <span className="contact__card-data">@Su User</span>
              <a href="https://www.instagram.com/" className="contact__button">
                {t("contact.contact__writeme")}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Sección del Formulario */}
        <div className="contact__content">
          <h3 className="contact__title">{t("contact.contact__disposition")}</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-div">
              <label className="contact__form-tag">{t("contact.contact__name")}</label>
              <input type="text" name="name" className="contact__form-input" placeholder={t("contact.contact__input-name")} required />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">{t("contact.contact__email")}</label>
              <input type="email" name="email" className="contact__form-input" placeholder={t("contact.contact__input-email")} required />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">{t("contact.contact__message")}</label>
              <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder={t("contact.contact__input-message")} required></textarea>
            </div>
            <button className="button button--flex" type="submit">
              {t("contact.contact__sendmessage")}
              <i className="bx bx-send button__icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
