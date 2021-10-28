import React from 'react';
import styled from 'styled-components';

const CartHeader = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    display: grid;
    grid-template-columns: 15rem 1fr 1fr 1fr auto;
    justify-content: center;
    column-gap: 1rem;
    h5 {
      color: var(--dark-color-light);
      font-weight: 400;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
    }
  }
  span {
    width: 2rem;
    height: 2rem;
  }
  hr {
    margin-top: 0.5rem;
    margin-bottom: 3rem;
  }
`;

export default CartHeader;
