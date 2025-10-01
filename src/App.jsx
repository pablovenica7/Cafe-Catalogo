import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import StaggeredMenu from "./components/StaggeredMenu";
import logo from "./assets/logo.png";
import "./App.css";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "Nosotros", ariaLabel: "Learn about us", link: "/nosotros" },
  { label: "Productos", ariaLabel: "View our products", link: "/productos" },
  { label: "Contacto", ariaLabel: "Get in touch", link: "/contacto" },
];

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="menu-overlay">
          <StaggeredMenu
            position="right"
            items={menuItems}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl={logo}
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div>

        {/* Rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}
