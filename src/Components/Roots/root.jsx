import React, { useState } from 'react';
import '../../Styles/root.css';
import { NavLink, Outlet } from 'react-router-dom';
import { HiddenLinks } from './hiddenLinks';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Root = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openMenu = () => {
    setNavOpen(true);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <React.Fragment>
      <div className="root">
        <h1>Business</h1>
        {navOpen && (
          <div className="hidden-link">
            <HiddenLinks onCloseMenu={closeMenu} />
          </div>
        )}
        <span onClick={navOpen ? closeMenu : openMenu}>{navOpen ? <IoIosCloseCircleOutline /> : <GiHamburgerMenu />}</span>
        <nav>
          <NavLink to="/" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/blog" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')}>
            Our Blog
          </NavLink>
          <NavLink to="/contact" hrefLang="#header" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Root;
