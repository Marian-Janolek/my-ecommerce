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
    justify-content: center;
    align-items: flex-end;
    column-gap: 0.25rem;
    background-color: var(--white-color);
    border-radius: var(--radius);
    padding: 0.4rem;
  }

  .search-input {
    outline: none;
    border: none;
    font-size: var(--normal-font-size);
    padding: 0.5rem;
    font-weight: var(--font-bold);
    padding-left: 1rem;
  }
  .search-input::placeholder {
    color: var(--dark-color-light);
    font-weight: var(--font-semi-bold);
    font-size: var(--normal-font-size);
    font-family: var(--body-font);
  }
  @media (max-width: 992px) {
    .search-form {
      width: 70vw;
    }
    .search-input {
      width: 100%;
    }
  }
  @media (max-width: 720px) {
    .search-form {
      width: 60vw;
    }
    .search-input {
      padding: 0.3rem;
    }
    .search-input::placeholder {
      font-size: var(--smaller-font-size);
      font-weight: var(--font-medium);
    }
    .btn {
      padding: 0.3rem;
      font-size: var(--smaller-font-size);
      font-weight: var(--font-medium);
    }
  }
`;

export default SearchBox;
