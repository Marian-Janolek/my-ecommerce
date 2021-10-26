import React from 'react';
import styled from 'styled-components';
import Filters from '../components/Filters';

const ProductPage = () => {
  return (
    <Wrapper className="section-center">
      <Filters />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ProductPage;
