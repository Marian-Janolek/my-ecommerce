import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CartHeader from './CartHeader';
import CartItem from './CartItem';

const CartContent = () => {
  return (
    <Wrapper className="section-center ">
      <CartHeader />
      <CartItem />
      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button type="button" className="btn">
          clear shopping cart
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 4rem;
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
`;

export default CartContent;
