import React from 'react';
import styled from 'styled-components';
import { newCollection } from '../utils/constants';
import { Card } from '.';

const GridView = () => {
  return (
    <Wrapper>
      <div className="product-container">
        {newCollection.map((newC) => {
          const { id, name, image, price } = newC;
          return (
            <Card
              key={id}
              name={name}
              image={image}
              price={price}
              data={newC.size}
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
