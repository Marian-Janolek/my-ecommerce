import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiCart } from 'react-icons/bi';
import { FiUserMinus, FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';
import { useUserContext } from '../context/userContext';

const CartButtons = () => {
  const { myUser } = useUserContext();

  return (
    <Wrapper>
      {myUser ? (
        <Link to="/profile" className="user-icon">
          <FiUserMinus />
        </Link>
      ) : (
        <Link to="/login" className="user-icon">
          <FiUserPlus />
        </Link>
      )}

      <Link to="cart" className="cart-icon">
        <BiCart />
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
  }
`;

export default CartButtons;
