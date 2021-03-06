import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  footerLinks,
  socials,
  aboutUs,
  supportLinks,
} from '../utils/constants';
import Subscribe from './Subscribe';
import { useSubmenuContext } from '../context/submenuContext';

const Footer = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <div className="bg-dark" onMouseOver={closeSubmenu}>
      <Subscribe />
      <FooterWrapper className="section-center">
        <div>
          <h3>About Us</h3>
          <ul className="footer-about">
            {aboutUs.map(({ id, url, text }) => {
              return (
                <li key={id} className="padding">
                  <Link to={url}> {text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="footer-links">
            <h3>for customers</h3>
            {footerLinks.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} className="padding">
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-support">
          <h3>Support</h3>
          <ul className="support">
            {supportLinks.map(({ id, text, url }) => {
              return (
                <li key={id} className="padding">
                  <Link to={url}> {text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social-flex">
          <h3>You can follow us:</h3>
          <ul className="social-icons">
            {socials.map(({ id, icon, url }) => {
              return (
                <a href={url} key={id} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              );
            })}
          </ul>
        </div>
        <p className="footer-creator">
          <span>
            &copy; <span>{new Date().getFullYear().toString()}</span> Created by
            <a
              href="https://www.facebook.com/majko.janolek"
              target="_blank"
              rel="noreferrer"
              className="creator"
            >
              {' '}
              Majko Janolek
            </a>
          </span>
        </p>
      </FooterWrapper>
    </div>
  );
};

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1rem;
  padding-top: 4rem;
  padding-bottom: 6rem;
  position: relative;

  .footer-about {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
  }
  .support {
    text-transform: capitalize;
  }
  .social-flex {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;
  }
  .social-icons {
    display: inline-flex;
    gap: 1rem;
    svg {
      font-size: 1.5rem;
    }
  }
  .footer-links {
    text-transform: capitalize;
  }
  h3 {
    color: var(--dark-color-light);
    padding-bottom: 0.8rem;
  }
  a {
    color: var(--dark-color-lighten);
  }
  .padding {
    padding-top: 0.5rem;
  }
  a:hover {
    color: var(--dark-color-light);
  }
  .footer-creator {
    position: absolute;
    color: var(--white-color);
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
  }
  .creator {
    text-transform: uppercase;
  }
  .creator:hover {
    color: var(--dark-color-light);
  }
  @media (max-width: 772px) {
    padding-top: 2.5rem;
    grid-template-columns: repeat(3, 1fr);
    .social-flex {
      grid-area: 2 / 3 / 2 / 3;
    }
  }
  @media (max-width: 530px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
    padding-left: 1rem;
    .social-flex {
      grid-area: initial;
    }
  }
`;

export default Footer;
