import React, { useState } from 'react';

import React from 'react';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search for products..."
        value={keyword}
      ></input>
    </form>
  );
};

export default SearchBox;
