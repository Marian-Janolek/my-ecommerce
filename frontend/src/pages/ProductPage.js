import React from 'react';
import styled from 'styled-components';
import { Filters } from '../components';
import { Sort } from '../components';
import { useSubmenuContext } from '../context/submenuContext';

const ProductPage = () => {
  const { closeSubmenu } = useSubmenuContext();

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div className="products">
          <Filters />
          <div>
            <Sort />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductPage;
