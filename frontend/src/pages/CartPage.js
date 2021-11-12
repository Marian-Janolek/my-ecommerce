import React from 'react';
import { CartContent } from '../components';
import { useCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <Wrapper className="section-center">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <>
      <CartContent />
    </>
  );
};

const Wrapper = styled.div``;

export default CartPage;
