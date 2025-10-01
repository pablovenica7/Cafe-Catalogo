import React from "react";
import "./Contacto.css";
import imgContacto from "../assets/img-contacto.png";

export default function Contacto() {
  return (
    <div className="contacto-container">
      {/* Columna izquierda: Imagen */}
      <div className="contacto-image">
        <img src={imgContacto} alt="Contacto" />
      </div>

      {/* Columna derecha: Formulario */}
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
        </div>
      </div>
    </div>
  );
}
