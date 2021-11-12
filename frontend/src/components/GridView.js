import React from 'react';
import styled from 'styled-components';
import { Card } from '.';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="product-container">
        {products.map((product) => {
          const { _id, name, image, price } = product;
          return (
            <Card
              key={_id}
              id={_id}
              name={name}
              image={image}
              price={price}
              data={product.sizes}
              text=""
              style={{ background: '#fff' }}
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
