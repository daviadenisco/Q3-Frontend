import React from 'react';
import "../Cards.css";
import galvanize from '../images/galvanize-logo.svg';

const NavBar = () =>
  <div className="navbar">
    <header className="galvanize-logo">
      <img src={galvanize} alt="galvanize logo" />
      </header>
      <p className="App-intro"></p>
</div>

export default NavBar;
