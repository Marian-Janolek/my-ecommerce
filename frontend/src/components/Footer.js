import React from 'react';
import styled from 'styled-components';
import { footerLinks, socials } from '../utils/constants';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <h3>for customers</h3>
        <ul>
          {footerLinks.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {socials.map(({ id, icon, url }) => {
            return (
              <a href={url} key={id} target="_blank">
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
`;

export default Footer;
