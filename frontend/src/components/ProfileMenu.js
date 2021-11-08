import React, { useState } from 'react';
import styled from 'styled-components';
import { Order, UserReviews, UserUpdate } from '.';

const ProfileMenu = () => {
  const [value, setValue] = useState(1);

  return (
    <Wrapper>
      <div className="btn-flex">
        <button
          className={`btn-links ${value === 1 && `btn-active`}`}
          onClick={() => setValue(1)}
        >
          Orders
        </button>
        <button
          className={`btn-links ${value === 2 && `btn-active`}`}
          onClick={() => setValue(2)}
        >
          Your reviews
        </button>
        <button
          className={`btn-links ${value === 3 && `btn-active`}`}
          onClick={() => setValue(3)}
        >
          Personal information
        </button>
      </div>
      <article>
        {value === 1 && <Order />}

        {value === 2 && <UserReviews />}

        {value === 3 && <UserUpdate />}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;

  .btn-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2rem;
  }

  .btn-links {
    border: none;
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
  }
  .btn-links:hover {
    color: var(--dark-color);
  }
  button {
    position: relative;
  }
  .btn-links::after,
  .btn-active::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 0.1rem;
    background-color: var(--dark-color);
    bottom: 0%;
    left: 50%;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .btn-active::after {
    width: 100%;
    left: 0%;
  }
  .btn-links:hover::after {
    left: 0%;
    width: 100%;
  }
  .btn-active {
    color: var(--dark-color);
  }
`;

export default ProfileMenu;
