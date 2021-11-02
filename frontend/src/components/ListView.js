import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = () => {
  const products = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630181/my-ecommerce/women2_gtiblg.png',
      name: 'nike performance',
      price: 111,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsa optio maxime, mollitia natus, ea iste illo non ex, est officia numquam! Numquam porro ipsa dolore in ex quia odio debitis adipisci quos accusantium eveniet cum, sunt nostrum? Ullam, dolorem! Repellendus, nostrum? Possimus ipsam veritatis nobis delectus consequatur maxime doloremque! Sequi itaque eligendi dignissimos inventore hic perspiciatis animi molestias quos?',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/do5rzxmh3/image/upload/v1634630180/my-ecommerce/women1_hyh6az.png',
      name: 'nike air max',
      price: 99.99,
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat ipsa optio maxime, mollitia natus, ea iste illo non ex, est officia numquam! Numquam porro ipsa dolore in ex quia odio debitis adipisci quos accusantium eveniet cum, sunt nostrum? Ullam, dolorem! Repellendus, nostrum? Possimus ipsam veritatis nobis delectus consequatur maxime doloremque! Sequi itaque eligendi dignissimos inventore hic perspiciatis animi molestias quos?',
    },
  ];

  return (
    <Wrapper>
      {products.map((product) => {
        const { id, name, image, price, desc } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h3 className="price">{price} €</h3>
              <p>{desc.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;

  img {
    width: 100%;
    display: block;
    width: 15rem;
    height: 11rem;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }
  .price {
    color: var(--dark-color);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45rem;
    margin-bottom: 1rem;
  }
  article:hover {
    background-color: var(--white-color);
    box-shadow: var(--shadow);
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      transition: var(--transition);
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default ListView;
