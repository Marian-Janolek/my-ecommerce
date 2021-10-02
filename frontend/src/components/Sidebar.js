import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import { useSidebarContext } from '../context/sidebarContext';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <h1>hello</h1>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: #ff6d6d;
    transition: var(--transition);
    cursor: pointer;
    margin-top: auto 0.2rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: var(--dark-color-lighten);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  h1 {
    justify-self: center;
  }

  .links {
    margin-bottom: 2rem;
  }

  .links a {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--dark-color);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }
  .close-btn:hover {
    color: hsl(0, 97%, 50%);
    transform: scale(1.04);
    transform: rotateX(45);
  }
  .links a:hover {
    padding-left: 3rem;
    background: var(--dark-color-light);
    color: var(--dark-color-lighten);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
