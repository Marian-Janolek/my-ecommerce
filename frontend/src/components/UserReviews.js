import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UserReviews = () => {
  return (
    <Wrapper>
      <div className="review">
        <img src="https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women1_hyh6az.png" />
        <h4>Nike Performance </h4>
        <Link to="products" className="btn">
          rate product
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background-color: var(--white-color);

  .review {
    display: grid;
    grid-template-columns: auto minmax(10rem, 20rem) auto;
    justify-content: center;
    align-items: center;
    margin: 1rem 2rem;
    column-gap: 2rem;
  }
  img {
    width: 5rem;
  }
`;

export default UserReviews;
