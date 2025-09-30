import React from "react";
import "./Nosotros.css";
import imgMision from "../assets/img-mision.png";
import imgHistoria from "../assets/img-historia.png";

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Nuestra Misión */}
      <section className="nosotros-section">
        <div className="nosotros-content">
          <div className="nosotros-text-wrapper">
            <h2 className="nosotros-title">Nuestra Misión</h2>
            <p className="nosotros-text">
              En Dolce Aroma creemos que la pastelería y el café son más que
              productos: son experiencias que conectan a las personas. Nuestra
              misión es ofrecer calidad, tradición y un ambiente acogedor donde
              cada cliente disfrute un momento único.
            </p>
          </div>
          <div className="nosotros-img-wrapper">
            <img src={imgMision} alt="Nuestra Misión" className="nosotros-img" />
          </div>
        </div>
      </section>

      <hr className="nosotros-divider" />

      {/* Nuestra Historia */}
      <section className="nosotros-section">
        <div className="nosotros-content">
          <div className="nosotros-img-wrapper">
            <img src={imgHistoria} alt="Nuestra Historia" className="nosotros-img" />
          </div>
          <div className="nosotros-text-wrapper">
            <h2 className="nosotros-title">Nuestra Historia</h2>
            <p className="nosotros-text">
              Nacimos en el corazón de Córdoba con la idea de unir lo mejor de la
              panadería artesanal con el aroma del café recién tostado. Con
              dedicación y pasión, Dolce Aroma ha crecido para convertirse en un
              espacio donde cada detalle cuenta.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
