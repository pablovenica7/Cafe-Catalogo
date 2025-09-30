import React from "react";
import "./Home.css";
import imgHome from "../assets/img-home.png";
import BlurText from "../components/BlurText";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${imgHome})` }}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <BlurText
          text="Dolce Aroma"
          delay={150}
          animateBy="words"
          direction="top"
          className="home-title"
        />
        <BlurText
          text="Donde la pastelería se encuentra con el aroma del café."
          delay={100}
          animateBy="words"
          direction="bottom"
          className="home-subtitle"
        />
        <button className="home-button">Ver productos</button>
      </div>
    </div>
  );
}
