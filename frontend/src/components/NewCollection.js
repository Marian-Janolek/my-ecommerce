import React from 'react';
import styled from 'styled-components';
import Card from './Card';
// import { newCollection } from '../utils/constants';
import { useSubmenuContext } from '../context/submenuContext';
import { useProductContext } from '../context/productsContext';

const NewCollection = () => {
  const { closeSubmenu } = useSubmenuContext();
  const {
    products_loading: loading,
    products_error: error,
    new_products: newCollection,
  } = useProductContext();

  return (
    <div className="bg" onMouseOver={closeSubmenu}>
      <NewCollectionWrapper className="section-center">
        <h2>new collection</h2>
        <div className="underline"></div>
        <div className="new-card">
          {newCollection.map((newC) => {
            const { _id, name, image, price } = newC;
            return (
              <Card
                key={_id}
                name={name}
                image={image}
                price={price}
                data={newC.sizes}
                text="new"
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
export default NewCollection;
