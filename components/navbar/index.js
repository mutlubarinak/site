import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

// const routes = ['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About Us'];
const routes = [
  {
    name: 'Anasayfa',
    anchor: 'hero',
  },
  {
    name: 'Mutlu Barınak Nedir?',
    anchor: 'services',
  },
  {
    name: 'Hizmetler',
    anchor: 'contents',
  },
  {
    name: 'Yorumlar',
    anchor: 'quotes',
  },
  {
    name: 'Blog',
    anchor: 'blog',
  },
  {
    name: 'Hakkımızda',
    anchor: 'footer',
  },
];

export default () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <IconContext.Provider value={{ color: '#458FF6' }}>
      <nav className="navbar">
        <div className="navbar__container container">
          <Link href="/" onClick={closeMobileMenu}>
            <span><img src="./assets/logoanimal.png" className="navbar__logo" alt="trafalgar logo" /></span>
          </Link>
          <style jsx>
            {`
        .navbar__logo {
          width: 103px;
      }
      `}
          </style>
          <button type="button" className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </button>
          <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
            {routes.map((route) => (
              <li className="navbar__item">
                <Link className="navbar__link" href={`/#${route.anchor}`} onClick={closeMobileMenu}>
                  <span className="navbar__link">{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};
