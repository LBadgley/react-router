import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/blue">Blue</Link>
        <Link to="/yellow">Yellow</Link>
        <Link to="/red">Red</Link>
      </nav>
    </header>
  );
}

export default Header;
