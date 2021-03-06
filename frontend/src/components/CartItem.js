import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { AmountButtons } from '.';
import { useCartContext } from '../context/cartContext';

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, 'inc');
  };

  const decrease = () => {
    toggleAmount(id, 'dec');
  };

  return (
    <Wrapper key={id}>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{price}</h5>
        </div>
      </div>
      <h5 className="price">{price.toFixed(2)} €</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{(price * amount).toFixed(2)} €</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .subtotal {
    display: none;
  }
  .title {
    display: grid;
    grid-template-rows: 75px;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
    text-transform: capitalize;
  }
  .color {
    color: var(--dark-color-lighten);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-items: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background-color: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--dark-color-lighten);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
      h2 {
        font-size: var(--normal-font-size);
      }
    }
  }
  .remove-btn {
    color: var(--white-color);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background-color: var(--dark-color);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    justify-content: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rrem;
        height: 1rem;
        font-size: var(--normal-font-size);
      }
      h2 {
        font-size: var(--big-font-size);
      }
    }
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--dark-color);
      font-weight: 400;
      font-size: var(--normal-font-size);
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--dark-color);
      font-weight: 400;
    }
    .name {
      font-size: var(--smaller-font-size);
    }
    .color {
      font-size: var(--smaller-font-size);
      color: var(--dark-color);
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
`;

export default CartItem;
