import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0]);

  return (
    <Wrapper>
      <img src={main.url} alt="" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
              alt=""
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 100%;
    height: 400px;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: var(--shadow);
    transform: scale(1.1);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }

  @media (min-width: 992px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
