import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { FiUserMinus, FiUserPlus } from 'react-icons/fi';
import styled from 'styled-components';

const CartButtons = () => {
  const [user, setUser] = useState(false);

  return (
    <Wrapper>
      <Link to="/login" className="user-icon">
        {user ? <FiUserMinus /> : <FiUserPlus />}
      </Link>

      <Link to="cart" className="cart-icon">
        <BiCart />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  .user-icon,
  .cart-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

export default CartButtons;
