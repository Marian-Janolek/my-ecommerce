import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = ({ id, image, name, price, data, text }) => {
  return (
    <CardWrapper key={id}>
      <div className={text !== '' ? 'new' : ''}>{text}</div>
      <img src={image} alt={name} className="new-img" />
      <div className="new-size-parent">
        {data.map((nested) => {
          return (
            <Link to="/" className="new-size" key={id + nested}>
              {nested}
            </Link>
          );
        })}{' '}
      </div>

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
  padding: 1.5rem;
  transition: 0.3s;
  background-color: var(--dark-color-lighten);
  border-radius: calc(var(--radius) * 2);
  :hover .new-size {
    transform: translateY(-50%);
    background-color: var(--dark-color-lighten);
    opacity: 1;
  }
  :hover .new-img {
    transform: rotate(-30deg) translateY(-5%);
    transition: 0.3s;
  }
  :hover {
    background-color: var(--white-color);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
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
    text-transform: uppercase;
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
    font-size: var(--normal-font-size);
    letter-spacing: var(--spacing);
    font-weight: var(--font-bold);
    align-self: flex-start;
  }
  .new-price {
    font-size: var(--h2-font-size);
  }
  .new-size-parent {
    position: absolute;
    bottom: 22%;
    display: flex;
    justify-content: right;
    flex-wrap: wrap-reverse;
    gap: 0.5rem;
    padding-right: 0.8rem;
  }

  .new-size {
    position: relative;
    padding: 0.3rem;
    transform: translateY(100%);
    text-align: center;
    transition: 0.3s;
    letter-spacing: var(--spacing);
    opacity: 0;
    font-size: var(--smaller-font-size);
  }

  .new-size:hover {
    background-color: var(--dark-color);
    color: var(--white-color);
  }
`;

export default Card;
