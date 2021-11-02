import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { AddToCart } from '.';
import { ProductImages, Stars } from '.';
import { useSubmenuContext } from '../context/submenuContext';

const SingleProduct = () => {
  const { id } = useParams();
  const [brandLogo, setBrandLogo] = useState('');

  const { closeSubmenu } = useSubmenuContext();

  const logo = [
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635788814/my-ecommerce/adidas_logo_do6xd1.png',
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635787598/my-ecommerce/nike_logo_wb1pj1.png',
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635788814/my-ecommerce/puma_logo_a73rvr.png',
  ];

  const products = {
    id: 1,
    name: 'nike performance',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquid pariatur, consequuntur nobis molestias laudantium reiciendis. Minima reiciendis nulla fugiat explicabo deleniti id exercitationem, eaque facilis ipsam vero iusto ipsa quibusdam placeat quaerat beatae tenetur magni veritatis quod debitis ipsum inventore corporis non! Iusto eius amet at veritatis adipisci nihil, omnis architecto tempora voluptate, accusamus possimus non alias repellendus consectetur!',
    stars: 4.6,
    reviews: 22,
    price: 119,
    brand: 'nike',
    sizes: ['36', '37 1/3', '40', '40 2/3', '42', '42 2/3', '42', '42 2/3'],
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
    sizes,
    price,
  } = products;

  useEffect(() => {
    if (brand === 'adidas') {
      setBrandLogo(logo[0]);
    } else if (brand === 'nike') {
      setBrandLogo(logo[1]);
    } else if (brand === 'puma') {
      setBrandLogo(logo[2]);
    }
  }, []);

  return (
    <div onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <img src={brandLogo} alt="nike-logo" className="logo" />
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <div className="info">
              <div className="sizes">
                {sizes.map((size, index) => {
                  return (
                    <button key={index} type="submit" className="size">
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex-right">
              <h5 className="price">{price} €</h5>
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
    </div>
  );
};

const Wrapper = styled.article`
  margin-top: 3rem;
  margin-bottom: 4rem;

  .product-center {
    display: grid;
    gap: 4rem;
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
    margin-top: 0.5rem;
    padding: 0.7rem;
    text-transform: uppercase;
  }
  .h2 {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1.3fr 1fr;
      align-items: center;
      margin-left: 3rem;
    }
    .content {
      padding-left: 1rem;
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
    .sizes {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      max-width: 70%;
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
    }
    .size {
      position: relative;
      padding: 0.3rem;
      text-align: center;
      transition: 0.3s;
      letter-spacing: var(--spacing);
      opacity: 1;
      font-size: var(--smaller-font-size);
      border: none;
      background-color: var(--white-color);
      font-weight: var(--font-semi-bold);
    }
    .size:hover {
      background-color: var(--dark-color);
      color: var(--white-color);
    }
    .logo {
      width: 25%;
      margin-bottom: 1rem;
    }
    .flex-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      width: 70%;
    }
  }
`;

export default SingleProduct;
