import React from 'react';
import styled from 'styled-components';
import { sublinks } from '../utils/constants';

const Filters = () => {
  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <div className="form-control">
              <h3>category</h3>
              <div>
                {sublinks.map((link, index) => {
                  const { links } = link;
                  return <button key={index}>{links.text}</button>;
                })}
              </div>
            </div>
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
