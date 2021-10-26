import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <SearchBoxWrapper>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for products..."
          // value={keyword}
          className="search-input"
        />
        <button
          type="submit"
          className="btn"
          onClick={(e) => e.preventDefault()}
        >
          search
        </button>
      </form>
    </SearchBoxWrapper>
  );
};

const SearchBoxWrapper = styled.div`
  .search-form {
    display: flex;
    align-items: flex-end;
    column-gap: 0.25rem;
    background-color: var(--white-color);
    border-radius: var(--radius);
    padding: 0.4rem;
  }

  .search-input {
    outline: none;
    border: none;
    /* width: 20vw; */
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    font-weight: var(--font-bold);
    font-size: var(--fonts-semi-bold);
    padding-left: 1rem;
  }
  .search-input::placeholder {
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
  }
`;

export default SearchBox;
