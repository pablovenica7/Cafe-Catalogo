import React from "react";
import "./Contacto.css";
import imgContacto from "../assets/img-contacto.png"; // tu imagen

export default function Contacto() {
  return (
    <div className="contacto-container">
      {/* Columna izquierda: Imagen */}
      <div className="contacto-image">
        <img src={imgContacto} alt="Contacto" />
      </div>

      {/* Columna derecha: Formulario y datos */}
      <div className="contacto-content">
        <h2 className="contacto-title">Contact Us</h2>

        <div className="contacto-wrapper">
          {/* Formulario */}
          <form className="contacto-form">
            <label>
              Full Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              E-mail
              <input type="email" name="email" placeholder="Your email" required />
            </label>

            <label>
              Message
              <textarea name="message" placeholder="Write your message..." required />
            </label>

            <button type="submit" className="contacto-btn">Contact Us</button>
          </form>

          {/* Datos de contacto */}
          <div className="contacto-info">
            <p><strong>Contact</strong><br/>hi@fashion.com</p>
            <p><strong>Based in</strong><br/>San Francisco, California</p>

            <div className="contacto-socials">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
