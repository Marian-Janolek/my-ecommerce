import React from 'react';
import styled from 'styled-components';

const Subscribe = () => {
  return (
    <SubscribeWrapper className="section-center">
      <div>
        <h2>
          subscribe and get <br />
          10% OFF
        </h2>
      </div>
      <div>
        <h3>
          Never miss out <br /> our latest collections
        </h3>
      </div>
      <form className="form-subscribe">
        <input
          type="email"
          placeholder="Enter your email"
          className="input-subscribe"
          required
        />
        <button
          type="submit"
          className="btn btn-subscribe"
          onClick={(e) => e.preventDefault()}
        >
          Subscribe
        </button>
      </form>
    </SubscribeWrapper>
  );
};

const SubscribeWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 3rem;
  h2 {
    text-transform: capitalize;
    color: var(--white-color);
    letter-spacing: var(--spacing);
    text-align: center;
  }
  h3 {
    color: var(--white-color);
    letter-spacing: var(--spacing);
    text-align: center;
  }
  .form-subscribe {
    display: flex;
    column-gap: 0.5rem;
    background-color: var(--white-color);
    border-radius: calc(var(--radius) * 2);
    padding: 0.5rem;
    padding-left: 1rem;
  }
  .input-subscribe {
    outline: none;
    border: none;
    width: 20vw;
    color: var(--dark-color);
    font-weight: var(--font-bold);
  }
  .input-subscribe::placeholder {
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
  }

  .btn-subscribe {
    position: relative;
    padding: 1rem 1rem;
    border-radius: calc(var(--radius) * 2);
    transition: none;
  }
  .btn-subscribe:active {
    transform: scale(0.95);
  }

  @media (max-width: 772px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
  .form-subscribe {
    grid-area: 2 / 2 / 3/ 3;
    margin-top: 1rem;
  }

  @media (max-width: 660px) {
    .form-subscribe {
      width: 80%;
      grid-area: 2 / 1 / 3/ 3;
      .input-subscribe {
        width: 100%;
      }
    }
  }
  @media (max-width: 500px) {
    .btn-subscribe {
      padding: 0.5rem;
      font-size: var(--smaller-font-size);
      font-weight: var(--font-medium);
    }
    .form-subscribe {
      padding: 0.3rem;
      padding-left: 1rem;
    }
  }
`;

export default Subscribe;
