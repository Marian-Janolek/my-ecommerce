import React from 'react';
import styled from 'styled-components';

import ProfileHeader from '../components/ProfileHeader';
import ProfileMenu from '../components/ProfileMenu';

const ProfileContent = () => {
  return (
    <Wrapper className="section-center">
      <ProfileHeader />
      <ProfileMenu />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export default ProfileContent;
