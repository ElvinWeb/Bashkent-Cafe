import React from "react";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-6">
            <ContactForm />
          </div>
          <div className="col-12 col-xl-6">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
