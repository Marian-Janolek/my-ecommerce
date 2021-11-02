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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem 1.5rem;
  }
`;

export default GridView;
