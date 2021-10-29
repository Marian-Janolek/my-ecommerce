import React, { useRef } from 'react';
import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useSubmenuContext } from '../context/submenuContext';
import { CartTotals } from '.';

const CartContent = () => {
  const { closeSubmenu } = useSubmenuContext();

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div>
          <CartHeader />
          <CartItem />
          <hr />
          <CartItem />
          <hr />
          <CartItem />
          <hr />
          <CartItem />
          <hr />
        </div>
        <CartTotals />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  column-gap: 2.5rem;

  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export default CartContent;
