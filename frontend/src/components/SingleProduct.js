import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AddToCart } from '.';
import { ProductImages, Stars } from '.';

const SingleProduct = () => {
  const { id } = useParams();

  const products = {
    id: 1,
    name: 'nike performance',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid pariatur, consequuntur nobis molestias laudantium reiciendis. Minima reiciendis nulla fugiat explicabo deleniti id exercitationem, eaque facilis ipsam vero iusto ipsa quibusdam placeat quaerat beatae tenetur magni veritatis quod debitis ipsum inventore corporis non! Iusto eius amet at veritatis adipisci nihil, omnis architecto tempora voluptate, accusamus possimus non alias repellendus consectetur!',
    stock: 21,
    stars: 4.6,
    reviews: 22,
    price: 119,
    brand: 'nike',
    sizes: 38,
    images: [
      {
        id: '2413432432',
        url: 'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women1_hyh6az.png',
      },
      {
        id: '123123123555d',
        url: 'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634655483/my-ecommerce/ourSortiment1_iwoh0z.jpg',
      },
      {
        id: 'dsafdfsdf33333',
        url: 'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg',
      },
      {
        id: '21231bbb11',
        url: 'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment4_yjyi7y.jpg',
      },
      {
        id: '2413432432',
        url: 'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634712131/my-ecommerce/ourSortiment5_fxw3gh.jpg',
      },
    ],
  };

  const {
    name,
    description: desc,
    stars,
    reviews,
    brand,
    images,
    stock,
    sizes,
    price,
  } = products;

  return (
    <Wrapper className="section-center">
      <div className="product-center">
        <ProductImages images={images} />
        <section className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <div className="info">
            <h5 className="price">{price} €</h5>
            <div className="sizes">{sizes}</div>
            <button type="submit" className="btn">
              add to cart
            </button>
          </div>
        </section>
      </div>
      <h2 className="h2">Product Description</h2>
      <section className="product-desc">
        <img src="https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg" />
        <section>
          <h2>{name}</h2>
          <p className="desc">{desc}</p>
        </section>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 3rem;
  margin-bottom: 4rem;

  .product-center {
    display: grid;
    gap: 5rem;
  }

  .price {
    color: var(--dark-color);
  }

  .desc {
    line-height: 2;
    max-width: 30rem;
  }
  span {
    font-weight: var(--font-bold);
  }

  h2 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .btn {
    margin-top: 1rem;
    padding: 0.7rem;
    text-transform: uppercase;
  }
  .h2 {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1.3fr 1fr;
      align-items: center;
      margin-left: 3rem;
    }
    .price {
      font-size: var(--bigger-font-size);
    }
    .product-desc {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      img {
        width: 100%;
        border-radius: calc(var(--radius) * 2);
      }
    }
  }
`;

export default SingleProduct;
