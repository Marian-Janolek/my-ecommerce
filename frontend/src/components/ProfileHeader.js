import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';

const ProfileHeader = () => {
  return (
    <Wrapper>
      <h2>Welcome, Majko</h2>
      <FaUserCircle />
      <h5>Golden member</h5>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  margin-bottom: 2rem;

  svg {
    font-size: 8rem;
    color: var(--dark-color-light);
  }
  h5 {
    color: var(--dark-color);
  }
`;

export default ProfileHeader;
