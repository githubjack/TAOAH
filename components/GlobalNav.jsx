import * as React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './GlobalNav.css';

export function GlobalNav() {
  return (
    <React.Fragment>
      <a href="#" 
        className="navbar-toggle">

      </a>

      <nav className="global-nav opened">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Trending</a>
        <a href="#">Art</a>
        <a href="#">Politics</a>
        <a href="#">Cosmology</a>
        <a href="#">Discover more</a>
      </nav>
    </React.Fragment>
  );
}