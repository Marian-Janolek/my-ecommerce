import React from 'react';
import styled from 'styled-components';
import { AdminOrders, AdminProducts, AdminUsers } from '.';
import { useSubmenuContext } from '../context/submenuContext';

const AdminContent = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <AdminUsers />
        <AdminProducts />
        <AdminOrders />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

export default AdminContent;
