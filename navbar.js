import React from 'react';
import './style.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Everest Lentes</h1>
      <ul>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;