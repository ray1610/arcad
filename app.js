// Ejemplo de animación de scroll
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('animated');
    });
});
import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Products from './Products';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Products />
    </div>
  );
}

export default App;
