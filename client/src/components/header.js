import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>trym</h1>
    <nav>
      <Link to="/">let's trym!</Link>
      <Link to="/about">about us</Link>
      <Link to="/editor">editor</Link>
    </nav>
  </header>
);

export default Header;
