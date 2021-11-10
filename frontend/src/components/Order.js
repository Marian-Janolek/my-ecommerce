import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Order = () => {
  return (
    <Wrapper>
      <h2>
        order : <span>1312434564sdadf1213</span>{' '}
      </h2>
      <article className="order-flex">
        <div>
          <h3>shipping</h3>
          <h5>
            name : <span>majko</span>{' '}
          </h5>
          <h5>
            adress : <span>bla bal bala adafds</span>{' '}
          </h5>
          <h5>
            Delivered on : <span>2021-09-11</span>
          </h5>
        </div>
        <div>
          <h3>Payment method</h3>
          <h5>
            method: <span>paypal</span>
          </h5>
          <h5>
            Paid on on : <span>2021-09-11</span>
          </h5>
        </div>
      </article>

      <h3>order items</h3>
      <section className="order-grid">
        <img
          src="https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women1_hyh6az.png"
          alt=""
        />
        <p>
          <Link to="/products">nike performance </Link>
        </p>
        <span>2ks</span>
        <p>222 €</p>
      </section>
      <div className="total">
        <h3>
          total : <span>222 €</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 2rem;
  width: 50vw;
  background-color: var(--white-color);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  .order-flex {
    display: flex;
    justify-content: space-between;
    column-gap: 3rem;
    margin-bottom: 2rem;
  }
  .order-grid {
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    justify-content: center;
    align-items: center;
    grid-column-gap: 2rem;
  }
  img {
    width: 5rem;
  }
  h2 {
    text-transform: capitalize;
    margin-bottom: 1rem;
    letter-spacing: var(--spacing);
  }
  h3 {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: var(--spacing);
  }
  h5 {
    text-transform: capitalize;
    margin-bottom: 0.3rem;
  }
  .total {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
`;

export default Order;
