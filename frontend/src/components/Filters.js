import React from 'react';
import styled from 'styled-components';

const Filters = () => {
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
            />
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
  }
`;

export default Filters;
