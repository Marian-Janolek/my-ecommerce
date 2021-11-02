import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';

const Sort = () => {
  return (
    <Wrapper>
      <div className="btn-container">
        <button type="button" className="active">
          <BsFillGridFill />
        </button>
        <button type="button" className="active">
          <BsList />
        </button>
      </div>
      <p>number of products</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="pricehighest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  hr {
    background-color: var(--dark-color);
    margin-bottom: 0.5rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background-color: transparent;
      border: 1px solid var(--dark-color);
      color: var(--white-color);
      width: 1.5rem;
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: var(--normal-font-size);
      }
    }
    .active {
      background-color: var(--dark-color);
      color: var(--white-color);
    }
  }
  .sort-input {
    border-color: transparent;
    font-size: var(--normal-font-size);
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: var(--normal-font-size);
    text-transform: capitalize;
    margin-right: 1rem;
  }
`;

export default Sort;
