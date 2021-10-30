import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSubmenuContext } from '../context/submenuContext';
import styled from 'styled-components';
import { submenuImg } from '../utils/constants';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useSubmenuContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');
  const [img, setImg] = useState(submenuImg.image[0]);

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location, links]);

  const displayPreviewImg = ({ index }) => {
    setImg(submenuImg.image[index]);
  };

  return (
    <SubmenuContainer>
      <aside
        ref={container}
        className={`${isSubmenuOpen ? 'submenu show-submenu' : 'submenu'}`}
      >
        <div className={`submenu-center ${columns}`}>
          <ul className="submenu-flex">
            {links.map((link, index) => {
              const { id, text, url } = link;
              return (
                <Link id={id} to={url} key={id} className="submenu-links">
                  {text}{' '}
                </Link>
              );
            })}
          </ul>
          <section className="submenu-img">
            <img src={img} />
          </section>
        </div>
      </aside>
    </SubmenuContainer>
  );
};

const SubmenuContainer = styled.div`
  .submenu {
    background: var(--white-color);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: none;
    padding: 2rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  .submenu::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid var(--white-color);
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  .show-submenu {
    display: block;
  }
  .submenu-center {
    position: relative;
    display: grid;
    gap: 0.25rem 3rem;
  }
  .submenu-flex {
    display: flex;
    flex-direction: column;
    width: 7rem;
    gap: 1rem;
  }
  .submenu-flex a {
    text-transform: capitalize;
  }
  .col-2 {
    grid-template-columns: 0.3fr 1fr;
  }
  .submenu-img {
    display: flex;
    width: 20rem;
    height: 100%;
    border-radius: var(--radius);
    border: 2px solid var(--dark-color);
    z-index: 20;
    object-fit: cover;
    background: no-repeat;
  }
  .submenu-links {
    display: inline-block;
    position: relative;
  }
  .submenu-links::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0.1rem;
    background-color: var(--dark-color);
    bottom: 0%;
    left: 50%;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .submenu-links:hover::after {
    left: 0%;
    width: 100%;
  }
`;

export default Submenu;
