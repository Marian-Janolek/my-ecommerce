import React, { useState } from 'react';
import styled from 'styled-components';
import { Order, UserReviews, UserUpdate } from '.';

const ProfileMenu = () => {
  const [buttons, setButtons] = useState([]);
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <div className="btn-flex">
        <button className="btn-links" onClick={() => setValue(1)}>
          Orders
        </button>
        <button className="btn-links" onClick={() => setValue(2)}>
          Your reviews
        </button>
        <button className="btn-links" onClick={() => setValue(3)}>
          Personal information
        </button>
      </div>
      <Order />
      <UserReviews />
      <UserUpdate />
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
`;

export default ProfileMenu;
