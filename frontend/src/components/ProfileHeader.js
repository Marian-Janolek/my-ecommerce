import React from 'react';
import styled from 'styled-components';

const ProfileHeader = () => {
  return (
    <Wrapper>
      <h2>Welcome, Majko</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export default ProfileHeader;
