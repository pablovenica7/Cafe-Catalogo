import React from "react";
import "./Nosotros.css";
import founders from "../assets/img-home.png"; // ⚡ reemplazá con foto real

export default function Nosotros() {
  return (
    <div className="nosotros-container">
      {/* Sección Misión */}
      <section className="section">
        <div className="text">
          <h2 className="section-title">Nuestra Misión</h2>
          <p className="section-paragraph">
            Creemos que una cafetería y pastelería no es solo un lugar para disfrutar de un buen café o un postre, 
            sino un espacio donde se comparte, se inspira y se construyen momentos únicos.  
            Por eso trabajamos día a día con dedicación, seleccionando ingredientes de calidad y brindando 
            experiencias que unan a las personas.
          </p>
        </div>
        <div className="image-wrap">
          <img src={founders} alt="Fundadores Dolce Aroma" className="image" />
        </div>
      </section>

      {/* Sección Historia (img izq - texto der) */}
      <section className="section historia">
        <div className="image-wrap">
          <img src={founders} alt="Historia Dolce Aroma" className="image" />
        </div>
        <div className="text">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="section-paragraph">
            Dolce Aroma nació con la idea de combinar el aroma de un café artesanal con el sabor de la pastelería casera.  
            Lo que empezó como un pequeño local de barrio fue creciendo hasta convertirse en un referente, 
            donde cada detalle refleja nuestra pasión por el buen gusto, la calidad y el servicio cercano.  
          </p>
        </div>
      </section>
    </div>
  );
}
