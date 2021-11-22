import React from 'react';
import styled from 'styled-components';
import { ourSortiment } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSubmenuContext } from '../context/submenuContext';

const OurSortiment = () => {
  const { closeSubmenu } = useSubmenuContext();

  return (
    <div className="bg" onMouseOver={closeSubmenu}>
      <OurSortimentWrapper className="section-center">
        <h2>our sortiment</h2>
        <div className="underline"></div>
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
    </div>
  );
};

const OurSortimentWrapper = styled.section`
  padding-top: 1rem;
  padding-bottom: 4rem;

  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    margin-top: 2rem;
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
  @media (max-width: 662px) {
    .sortiment-grid {
      grid-template-areas:
        'a c'
        'b c'
        'd e';
    }
  }
  @media (max-width: 520px) {
    .sortiment-grid {
      grid-template-areas:
        'a c'
        'b c'
        'd d'
        'e e';
    }
  }
  @media (max-width: 420px) {
    .sortiment-grid {
      grid-template-areas: 'a' 'b' 'c' 'd' 'e';
    }
  }
`;

export default OurSortiment;
