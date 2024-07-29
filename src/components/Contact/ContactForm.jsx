import React from "react";
import title_design from "../../bashkent-image/design/rotate.png";
const ContactForm = () => {
  return (
    <form action="" className="form-general">
      <div className="section-title">
        <h1 className="title">Əlaqə</h1>
        <img src={title_design} alt="design" />
      </div>
      <input type="text" placeholder="Adınız *" required />
      <input type="text" placeholder="Soyadınız *" required />
      <input type="email" placeholder="Email *" required />
      <input type="number" placeholder="Nömrə *" required />
      <input type="text" placeholder="Başlıq *" required />
      <textarea id="message-text" placeholder="Mesajınız *" required></textarea>
      <button type="submit" className="btn-submit active">
        Göndər
      </button>
    </form>
  );
};
export default ContactForm;
