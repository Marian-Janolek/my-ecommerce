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
        {ourSortiment.map((sortiment) => {
          const { id, image, title } = sortiment;
          return (
            <div className="sortiment-card" key={id}>
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
  padding-bottom: 4rem;
  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    padding-bottom: 2rem;
  }
  .sortiment-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .sortiment-card {
    position: relative;
    transition: 0.3s;
    border-radius: calc(var(--radius) * 2);
  }
  .sortiment-img {
    width: 100%;
    border-radius: calc(var(--radius) * 2);
  }
  .sortiment-card:hover {
    transform: translateY(-3%);
  }
  .sortiment-btn {
    position: absolute;
    bottom: 10%;
    left: 5%;
    padding: 1rem 2rem;
    border-radius: calc(var(--radius) * 2);
    transition: 0.5s;
  }
  .sortiment-btn:hover {
  }
`;

export default OurSortiment;
