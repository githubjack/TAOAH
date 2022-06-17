import * as React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './GlobalNav.css';

const NavLinks = () => (
  <div className="urls">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Trending</a>
        <a href="#">Art</a>
        <a href="#">Politics</a>
        <a href="#">Cosmology</a>
        <a href="#">Discover more</a>
  </div>
)

export function GlobalNav() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="global-nav">

      <div 
        className="navbar-toggle">
      {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
      </div>
      {toggleMenu && (
       <NavLinks />
)}

    </div>
  );
}