import React from 'react';
import styled from 'styled-components';
import { Card } from '.';
import { useProductContext } from '../context/productsContext';

const GridView = () => {
  const { products } = useProductContext();

  return (
    <Wrapper>
      <div className="product-container">
        {products.map((newC) => {
          const { _id, name, image, price } = newC;
          return (
            <Card
              key={_id}
              name={name}
              image={image}
              price={price}
              data={newC.sizes}
              text=""
              s
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 250px));
    gap: 2rem 1.5rem;
  }
  @media (max-width: 580px) {
    .product-container {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    }
  }
`;

export default GridView;
