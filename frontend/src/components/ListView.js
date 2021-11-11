import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { _id, name, image, price, desc } = product;
        return (
          <article key={_id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h3 className="price">{price} €</h3>
              <p>{desc.substring(0, 150)}...</p>
              <Link to={`/products/${_id}`} className="btn">
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  img {
    width: 100%;
    display: block;
    width: 15rem;
    height: 11rem;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .price {
    color: var(--dark-color);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45rem;
    margin-bottom: 1rem;
  }
  article:hover {
    background-color: var(--white-color);
    box-shadow: var(--shadow);
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      transition: var(--transition);
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default ListView;
