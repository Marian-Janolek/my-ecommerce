import React from 'react';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { BiCart } from 'react-icons/bi';
import { useSidebarContext } from '../context/sidebarContext';
import { FaBars } from 'react-icons/fa';
import { useSubmenuContext } from '../context/submenuContext';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const { openSubmenu, closeSubmenu } = useSubmenuContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('btn-links')) {
      closeSubmenu();
    }
  };

  return (
    <NavContainer onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          {/* <Link to="/">logo</Link> */}
          <h1>hello</h1>
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
          <AiOutlineUserAdd className="user-icon" />
          <BiCart className="cart-icon" />
        </div>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
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

  .user-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cart-icon {
    font-size: 1.5rem;
    cursor: pointer;
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
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: flex-end;
      margin-right: 1rem;
    }
    li {
      margin: 0 0.5rem;
    }
  }
`;

export default Navbar;
