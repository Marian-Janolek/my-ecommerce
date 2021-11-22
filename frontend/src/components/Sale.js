import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useSubmenuContext } from '../context/submenuContext';
import { useProductContext } from '../context/productsContext';
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
        <h2>Sale</h2>
        <div className="underline"></div>

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

  h2 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--spacing);
    margin-top: 1rem;
  }
  .new-card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 2rem;
  }
  .swiper-pagination {
    bottom: 0px;
  }
  .swiper {
    padding: 0rem 0rem 2rem;
  }
  .swiper-pagination-bullet-active {
    background-color: var(--dark-color);
  }
`;

export default Sale;
