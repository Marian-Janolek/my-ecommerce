import React from 'react';
import styled from 'styled-components';

const Card = ({ id, image, name, price, size }) => {
  return (
    <CardWrapper key={id}>
      <div className="new">New</div>
      <img src={image} alt={name} className="new-img" />
      <div className="new-size">{size}</div>
      <span className="new-price">{price} €</span>
      <span className="new-name">{name}</span>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  transition: 0.3s;
  background-color: var(--dark-color-lighten);
  border-radius: calc(var(--radius) * 2);
  :hover .new-size {
    transform: translateY(-50%);
    background-color: var(--white-color);
    opacity: 1;
  }
  .new {
    position: absolute;
    left: 0.5rem;
    background-color: var(--dark-color);
    color: var(--white-color);
    padding: 0.25rem 0.5rem;
    font-size: var(--h2-font-size);
    transform: rotate(-90deg);
    letter-spacing: var(--spacing);
  }
  .new-img {
    width: 220px;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
    transform: rotate(-30deg);
    filter: drop-shadow(0 12px 8p rgba(0, 0, 0, 0.2));
  }
  .new-name,
  .new-price {
    font-size: var(--h2-font-size);
    letter-spacing: var(--spacing);
    font-weight: var(--font-bold);
    align-self: flex-start;
  }
  .new-size {
    position: absolute;
    width: 100%;
    bottom: 30%;
    left: 0;
    transform: translateY(100%);
    display: flex;
    transition: var(--transition);
    letter-spacing: var(--spacing);
    padding: 0.5rem 1rem;
    opacity: 0;
  }
`;

export default Card;
