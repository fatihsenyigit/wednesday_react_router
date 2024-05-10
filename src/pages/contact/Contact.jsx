import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact-bgImg-container">
        <main className="contact">
          <h2>Contact Me ...</h2>
          <div className="contact__list">
            <div className="contact__item">
              <i className="fas fa-envelope"></i> Email
              <div className="text-secondary">wednesday@nevermoreacademy.edu</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-mobile-alt"></i> Phone
              <div className="text-secondary">+40 (571) 360-1234</div>
            </div>
            <div className="contact__item">
              <i className="fas fa-map-marker-alt"></i> Address
              <div className="text-secondary">
                Strada Zamorei 1, Bușteni 105500, Romania
              </div>
            </div>
          </div>
        </main>

        <footer className="middle">
          <div className="social-icons">
            <a href="#twitter">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#facebook">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#instagram">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#github">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="copyright">&copy; Copyright 2023</div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
