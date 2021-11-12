import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';
import { useUserContext } from '../context/userContext';
import { useCartContext } from '../context/cartContext';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';

const CartButtons = () => {
  const { myUser } = useUserContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper>
      {myUser ? (
        <Link to="/profile" className="user-icon">
          <BiUser />
          <span className="cart-check">
            <AiOutlineCheck />
          </span>
        </Link>
      ) : (
        <Link to="/login" className="user-icon">
          <FiUserPlus />
        </Link>
      )}

      <Link to="cart" className="cart-icon">
        <BiCart />
        <span className="cart-value">{total_items}</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  column-gap: 1rem;
  .user-icon,
  .cart-icon {
    font-size: 1.5rem;
    cursor: pointer;
    position: relative;
  }

  .cart-value,
  .cart-check {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--dark-color);
    width: 0.9rem;
    height: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--white-color);
    padding: 11px;
  }
`;

export default CartButtons;
