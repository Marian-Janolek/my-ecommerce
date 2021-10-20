import React from 'react';
import styled from 'styled-components';
import { ourSortiment } from '../utils/constants';
import { Link } from 'react-router-dom';

const OurSortiment = () => {
  return (
    <OurSortimentWrapper className="section-center">
      <div className="underline"></div>
      <h2>our sortiment</h2>
      <article className="sortiment-grid">
        {ourSortiment.map((sortiment, index) => {
          const { id, image, title } = sortiment;
          return (
            <div className={`sortiment-card sortiment${index}`} key={id}>
              <img src={image} alt={title} className="sortiment-img" />
              <Link to="/" alt={title} className="sortiment-btn btn">
                {title}
              </Link>
            </div>
          );
        })}
      </article>
    </OurSortimentWrapper>
  );
};

const OurSortimentWrapper = styled.section`
  padding-bottom: 5rem;
  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    padding-bottom: 3rem;
  }
  .sortiment-grid {
    display: grid;
    grid-template-rows: 200px 200px;
    gap: 1rem;
    grid-template-areas:
      'a b c'
      'd e c';
  }
  .sortiment0 {
    grid-area: a;
  }
  .sortiment1 {
    grid-area: b;
  }
  .sortiment2 {
    grid-area: c;
  }
  .sortiment2 .sortiment-btn {
    bottom: calc(10% - 1rem);
  }
  .sortiment3 {
    grid-area: d;
  }
  .sortiment4 {
    grid-area: e;
  }
`;

export default OurSortiment;
