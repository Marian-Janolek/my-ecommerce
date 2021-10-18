import React from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const Featured = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <FeaturedWrapper
      className="section-center"
      onMouseOver={closeSubmenu}
    ></FeaturedWrapper>
  );
};

const FeaturedWrapper = styled.section`
  min-height: 65vh;
  display: grid;
  place-items: center;
  background-color: #222;
  margin-bottom: 2rem;
  img-container {
    display: none;
  }
`;

export default Featured;
