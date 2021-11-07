import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { useUserContext } from '../context/userContext';

const ProfileHeader = () => {
  const { logout } = useUserContext();

  const logoutSubmitHandler = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Wrapper>
      <h2>Welcome, Majko</h2>
      <FaUserCircle />
      <div className="logout">
        <h5>Golden member</h5>
        <button type="submit" className="btn" onSubmit={logoutSubmitHandler}>
          Log out
        </button>
      </div>
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
  .logout {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 50vw;
    button {
      position: absolute;
      right: 0;
      transition: none;
    }
    button:active {
      transform: scale(0.95);
    }
  }
`;

export default ProfileHeader;
