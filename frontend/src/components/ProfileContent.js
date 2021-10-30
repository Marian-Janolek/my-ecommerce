import React from 'react';
import styled from 'styled-components';

import ProfileHeader from '../components/ProfileHeader';
import ProfileMenu from '../components/ProfileMenu';
import { useSubmenuContext } from '../context/submenuContext';

const ProfileContent = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <ProfileHeader />
        <ProfileMenu />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export default ProfileContent;
