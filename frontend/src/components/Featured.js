import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';
import { featured } from '../utils/constants';
import { Link } from 'react-router-dom';

const Featured = () => {
  const { closeSubmenu } = useSubmenuContext();
  const [people, setPeople] = useState(featured);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <FeaturedWrapper className="section-center" onMouseOver={closeSubmenu}>
      {featured.map((feat, featIndex) => {
        const { id, image, name, price } = feat;
        let position = 'nextSlide';
        if (featIndex === index) {
          position = 'activeSlide';
        }
        if (
          featIndex === index - 1 ||
          (index === 0 && featIndex === feat.length - 1)
        ) {
          position = 'lastSlide';
        }
        return (
          <article className={position} key={id}>
            <div className="featured-flex">
              <h2>{name}</h2>
              <h3>{price} €</h3>
              <Link to="/" className="btn">
                explore now
              </Link>
            </div>

            <div className="shape">
              <img src={image} alt={name} className="featured-img" />
            </div>
          </article>
        );
      })}
    </FeaturedWrapper>
  );
};

const FeaturedWrapper = styled.section`
  position: relative;
  min-height: 75vh;
  border-radius: calc(var(--radius) * 2);
  overflow: hidden;
  margin-bottom: 2rem;

  article {
    position: absolute;
    display: grid;
    place-items: center;
    grid-template-columns: 0.4fr 1fr;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: var(--transition);
  }
  .shape {
    position: relative;
    width: 50%;
    height: 80%;
    background-color: var(--dark-color);
    border-radius: 50%;
  }
  .featured-img {
    position: absolute;
    left: -23%;
    max-width: initial;
    width: 500px;
    transform: rotate(-30deg);
  }
  article h2 {
    text-transform: uppercase;
  }

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  article.lastSlide {
    transform: translateX(-100%);
  }
  article.nextSlide {
    transform: translateX(100%);
  }
  .featured-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-left: 10rem;
  }
  .btn {
    padding: 1.125rem 2rem;
    border-radius: calc(var(--radius) * 2);
    transition: 0.5s;
  }
  .btn:hover {
    transform: translateY(-0.25rem);
  }
`;

export default Featured;
