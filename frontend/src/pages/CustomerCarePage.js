import React from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const CustomerCarePage = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <Wrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>customer care</h1>
      <div className="underline"></div>
      <div className="div-center">
        <h2>chat with us</h2>
        <p>
          Get a quick answer from our dedicated Customer Support Centre.
          Operating time 09:00 to 18:00 Monday to Sunday
        </p>

        <h2>talk with us</h2>
        <p>
          TALK WITH US If you have any inquiry / question regarding your order,
          delivery, shipping or anything related to our shop.sk online business
          - please call our online customer services number : +421 111 222 333.
          - Lines open 09:00 to 18:00 Monday to Sunday
        </p>
        <h2>E-MAIL</h2>
        <p>
          You are welcome to e-mail Customer Services with any questions or
          comments. We will reply within 24 hours, Our email ID :
          info-sport@sport.sk
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-bottom: 4rem;

  h2 {
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .div-center {
    background-color: var(--white-color);
    /* border: 1px solid var(--dark-color-light); */
    box-shadow: var(--shadow);
  }
`;

export default CustomerCarePage;
