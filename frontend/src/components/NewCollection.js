import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { newCollection } from '../utils/constants';

const NewCollection = () => {
  return (
    <div className="bg">
      <NewCollectionWrapper className="section-center">
        <div className="underline"></div>
        <h2>new collection</h2>
        <div className="new-card">
          {newCollection.map((newC) => {
            const { id, name, image, size, price } = newC;
            return (
              <Card
                key={id}
                name={name}
                image={image}
                size={size}
                price={price}
                data={newCollection}
              />
            );
          })}
        </div>
      </NewCollectionWrapper>
    </div>
  );
};

const NewCollectionWrapper = styled.section`
  background-color: var(--white-color);
  padding-top: 2rem;
  padding-bottom: 2rem;

  .underline {
    width: 8rem;
    height: 0.18rem;
    background-color: var(--dark-color);
    margin: 1rem auto;
  }
  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    padding-bottom: 2rem;
  }
  .new-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 2rem;
  }
`;
export default NewCollection;
