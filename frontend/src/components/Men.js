import React from 'react';
import { CardCategory } from '../components';
import { men } from '../utils/constants';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const Men = () => {
  const { closeSubmenu } = useSubmenuContext();

  return (
    <MenWrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>men sortiment</h1>
      <div className="underline"></div>
      <div className="men">
        {men.map((sortiment) => {
          const { id, title, image } = sortiment;
          return <CardCategory key={id} title={title} image={image} />;
        })}
      </div>
    </MenWrapper>
  );
};
const MenWrapper = styled.article`
  .men {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }
  h1 {
    text-transform: capitalize;
    margin-top: 2rem;
  }
  .underline {
    display: inline-block;
    text-align: left;
    margin-top: 1rem;
  }
`;

export default Men;
