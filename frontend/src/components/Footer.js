import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  footerLinks,
  socials,
  aboutUs,
  supportLinks,
} from '../utils/constants';

const Footer = () => {
  return (
    <FooterContainer className="section-center">
      <div>
        <h3>About Us</h3>
        <ul className="footer-about">
          {aboutUs.map(({ id, url, text }) => {
            return (
              <li key={id}>
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
              <li key={id}>
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
              <li key={id}>
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
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

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
`;

export default Footer;
