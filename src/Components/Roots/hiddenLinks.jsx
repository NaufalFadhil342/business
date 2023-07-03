import React from 'react';
import { NavLink } from 'react-router-dom';

export const HiddenLinks = (props) => {
  return (
    <nav>
      <NavLink to="/" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')} onClick={props.onCloseMenu}>
        Home
      </NavLink>
      <NavLink to="/blog" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')} onClick={props.onCloseMenu}>
        Our Blog
      </NavLink>
      <NavLink to="/contact" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')} onClick={props.onCloseMenu}>
        Contact
      </NavLink>
    </nav>
  );
};
