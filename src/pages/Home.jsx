import React from "react";
import "./Home.css";
import imgHome from "../assets/img-home.jpg";
import SplitText from "../components/SplitText";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${imgHome})` }}
    >
      <div className="overlay"></div>
      <div className="home-content">
        <SplitText
          text="Dolce Aroma"
          tag="h1"
          className="home-title"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => console.log("Título animado!")}
        />

        <TextType
          text={[
            "Donde la pastelería", 
            "se encuentra", 
            "con el aroma del café."
          ]}
          as="p"
          className="home-subtitle"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        <button className="home-button">Ver productos</button>
      </div>
    </div>
  );
}

