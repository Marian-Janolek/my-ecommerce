import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useSubmenuContext } from '../context/submenuContext';
import { useProductContext } from '../context/productsContext';

const Sale = () => {
  const { closeSubmenu } = useSubmenuContext();
  const {
    products_loading: loading,
    products_error: error,
    sale_products,
  } = useProductContext();

  return (
    <div className="bg-dark-lighten" onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <h2>Sale</h2>
        <div className="underline"></div>
        <div className="new-card">
          {sale_products.map((sale) => {
            const { _id, name, image, price } = sale;
            return (
              <Card
                key={_id}
                id={_id}
                name={name}
                image={image}
                price={price}
                data={sale.sizes}
                text="sale"
              />
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-color-lighten);
  padding-top: 1rem;
  padding-bottom: 4rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    margin-top: 1rem;
  }
  .new-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 2rem;
  }
`;

export default Sale;
