import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartTotals = () => {
  return (
    <Wrapper>
      <div className="coupon">
        <h2>have coupon ? </h2>
        <form className="form">
          <input
            type="text"
            placeholder="Coupon Code"
            className="input-coupon"
            required
          />
          <button
            type="submit"
            className="btn"
            onClick={(e) => e.preventDefault()}
          >
            APPLY
          </button>
        </form>
      </div>
      <div className="totals">
        <article>
          <h5>
            subtotal : <span>222 €</span>
          </h5>
          <p>
            shipping fee : <span>4.99 €</span>
          </p>
          <hr />
          <h4>
            order total : <span>282 €</span>
          </h4>
        </article>
        <div className="btns">
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
          <Link to="/products" className="btn">
            continue shopping
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* border: 1px solid var(--dark-color-light); */
  box-shadow: var(--shadow);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 3rem;

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 180px 1fr;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  h2 {
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  h5 {
    margin-bottom: 0.5rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  h4 {
    margin-top: 1rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }
  .btn {
    transition: none;
  }
  .btn:active {
    transform: scale(0.97);
  }
  .btns a {
    text-align: center;
  }
  span {
    text-align: right;
  }

  .form {
    display: flex;
    column-gap: 0.5rem;
    background-color: var(--white-color);
    border-radius: calc(var(--radius) * 2);
    padding: 0.5rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .input-coupon {
    outline: none;
    border: none;
    color: var(--dark-color);
    font-weight: var(--font-bold);
    font-size: var(--fonts-semi-bold);
    width: 8rem;
  }
  .input-coupon::placeholder {
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
  }
  hr {
    margin-bottom: 1.5rem;
  }
`;

export default CartTotals;
