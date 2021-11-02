import React from 'react';
import styled from 'styled-components';

const GridView = () => {
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
      <div className="product-container">
        {products.map((product) => {
          return;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default GridView;
