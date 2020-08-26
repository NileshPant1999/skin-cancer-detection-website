import React from 'react';
import './App.css';
import Header from "./Header.js";
import Main from "./Main.js";
import About from "./About.js";
import Cards from "./Cards.js"

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <About text="MediCure Team" />
      <Cards />
      <About text="Services We Offer" />
    </div>
  );
}

export default App;
