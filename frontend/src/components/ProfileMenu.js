import React, { useState } from 'react';
import styled from 'styled-components';
import { Order, UserReviews, UserUpdate } from '.';

const ProfileMenu = () => {
  const [value, setValue] = useState(1);

  return (
    <Wrapper>
      <div className="profile-btn-flex">
        <button
          className={`btn-links profile-btn-links ${
            value === 1 && `profile-btn-active`
          }`}
          onClick={() => setValue(1)}
        >
          Orders
        </button>
        <button
          className={`btn-links profile-btn-links ${
            value === 2 && `profile-btn-active`
          }`}
          onClick={() => setValue(2)}
        >
          Your reviews
        </button>
        <button
          className={`btn-links profile-btn-links ${
            value === 3 && `profile-btn-active`
          }`}
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
`;

export default ProfileMenu;
