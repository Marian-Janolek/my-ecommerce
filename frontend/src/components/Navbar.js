import React, { useState } from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSidebarContext } from '../context/sidebarContext';
import { FaBars } from 'react-icons/fa';
import { useSubmenuContext } from '../context/submenuContext';
import SearchBox from './SearchBox';
import CartButtons from './CartButtons';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const { openSubmenu, closeSubmenu } = useSubmenuContext();
  const [navbar, setNavbar] = useState(false);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    let bottom = tempBtn.bottom + 2;
    if (page === 'home' || page === 'new' || page === 'sale') {
      closeSubmenu();
    } else {
      openSubmenu(page, { center, bottom });
    }
  };

  const showNavbar = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', showNavbar);

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('btn-links')) {
      closeSubmenu();
    }
  };

  return (
    <NavContainer onMouseOver={handleSubmenu}>
      <div className={navbar ? 'nav-center active' : 'nav-center'}>
        <div className="nav-header">
          {/* <Link to="/">logo</Link> */}
          <h2>hello</h2>
          <SearchBox />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link
                  to={url}
                  className="btn-links"
                  onMouseOver={displaySubmenu}
                  onClick={closeSubmenu}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="icon-wrapper">
          <CartButtons />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: var(--header-height);

  .nav-center {
    width: 100vw;
    margin: 1rem auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--dark-color);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    cursor: pointer;
    color: var(--dark-color);
    transition: var(--transition);
    svg {
      font-size: 2rem;
    }
  }
  .nav-toggle:hover {
    transform: scale(1.06);
  }

  .icon-wrapper {
    display: none;
  }

  @media screen and (min-width: 992px) {
    .icon-wrapper {
      display: flex;
      gap: 1rem;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 0.7fr 0.45fr;
      align-items: center;
      position: fixed;
      height: var(--header-height);
      z-index: 10;
      transition: 0.3s;
      margin: 0 auto;
      padding: 0 6vw;
      column-gap: 1rem;
    }
    .nav-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 175px;
      }
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
    }
    li {
      margin: 0 0.5rem;
    }
    .btn-links::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 0.1rem;
      background-color: var(--dark-color);
      top: 10%;
      left: 50%;
      border-radius: 10px;
      transition: all 0.3s ease;
    }
    .btn-links:hover::after {
      left: 0%;
      width: 100%;
    }
    .active {
      background-color: var(--white-color);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 5px 10px -7px var(--dark-color);
    }
  }
`;

export default Navbar;
