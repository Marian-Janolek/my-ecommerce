import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { AddToCart, ProductImages, Stars } from '.';
import { useProductContext } from '../context/productsContext';
import { useSubmenuContext } from '../context/submenuContext';
import Loading from './Loading';
import { products_url } from '../utils/constants';

const SingleProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();
  const [brandLogo, setBrandLogo] = useState('');
  const { closeSubmenu } = useSubmenuContext();

  useEffect(() => {
    fetchSingleProduct(`${products_url}/${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);
  const {
    name,
    price,
    desc,
    rating: stars,
    numReviews: reviews,
    brand,
    image,
    sizes,
    countInStock,
  } = product;
  console.log(product);
  const logo = [
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635788814/my-ecommerce/adidas_logo_do6xd1.png',
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635787598/my-ecommerce/nike_logo_wb1pj1.png',
    'https://res.cloudinary.com/do5rzxmh3/image/upload/v1635788814/my-ecommerce/puma_logo_a73rvr.png',
  ];
  useEffect(() => {
    if (brand === 'adidas') {
      setBrandLogo(logo[0]);
    } else if (brand === 'nike') {
      setBrandLogo(logo[1]);
    } else if (brand === 'puma') {
      setBrandLogo(logo[2]);
    }
  }, [brand, logo]);

  const products = {
    images: [
      {
        id,
        url: image,
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

  if (loading) {
    return <Loading />;
  }

  const { images } = products;

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
                {/* {sizes.map((s, index) => {
                  return (
                    <button key={index} type="submit" className="size">
                      {s}
                    </button>
                  );
                })} */}
              </div>
            </div>
            <div className="flex-right">
              <h5 className="price">{price} €</h5>
              {countInStock > 0 && <AddToCart product={product} />}
            </div>
          </section>
        </div>
        <h2 className="h2">Product Description</h2>
        <section className="product-desc">
          <img
            src="https://res.cloudinary.com/do5rzxmh3/image/upload/v1634654510/my-ecommerce/ourSortiment2_fcyvts.jpg"
            alt=""
          />
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
      width: 65%;
    }
  }
`;

export default SingleProduct;
