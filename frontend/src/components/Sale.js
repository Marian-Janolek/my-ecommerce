import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useSubmenuContext } from '../context/submenuContext';
import { useProductContext } from '../context/productsContext';
import discount from '../assets/discount.png';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Navigation, Pagination]);
const Sale = () => {
  const { closeSubmenu } = useSubmenuContext();
  const {
    products_loading: loading,
    products_error: error,
    sale_products,
  } = useProductContext();

  return (
    <div className="bg-dark-lighten" onMouseOver={closeSubmenu}>
      <Wrapper className="section-center">
        <h2>mega sale</h2>
        <div className="underline"></div>
        <div className="flex">
          <h2>Start your new season with an amazing sales.</h2>
          <img src={discount} alt="discount" />
        </div>
        <Swiper
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            300: {
              spaceBetween: 16,
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
          }}
        >
          {sale_products.map((sale) => {
            const { _id, name, image, price } = sale;
            return (
              <SwiperSlide key={_id}>
                <Card
                  key={_id}
                  id={_id}
                  name={name}
                  image={image}
                  price={price}
                  data={sale.sizes}
                  text="sale"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-color-lighten);
  padding-top: 1rem;
  padding-bottom: 4rem;
  position: relative;

  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    margin-top: 1rem;
  }
  .underline {
    margin-bottom: 6.5rem;
  }
  .flex {
    position: absolute;
    left: 10%;
    top: 6%;
    display: flex;
    align-items: flex-end;
    gap: 3.5rem;
  }
  .flex h2 {
    text-transform: initial;
  }
  .flex img {
    width: 11rem;
    height: 8rem;
    object-fit: contain;
  }

  .swiper-pagination {
    bottom: 0px;
  }
  .swiper {
    padding: 1rem 1rem 2rem;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--dark-color);
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: var(--dark-color);
  }
`;

export default Sale;
