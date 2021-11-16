import React, { useRef } from 'react';
import styled from 'styled-components';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import { useSubmenuContext } from '../context/submenuContext';
import { CartTotals } from '.';
import { useCartContext } from '../context/cartContext';

const CartContent = () => {
  const { closeSubmenu } = useSubmenuContext();
  const { cart, clearCart } = useCartContext();

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div>
          <CartHeader />
          {cart.map((item) => {
            return (
              <>
                <CartItem key={item.id} {...item} /> <hr />
              </>
            );
          })}
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
