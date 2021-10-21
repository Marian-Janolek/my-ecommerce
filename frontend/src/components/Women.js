import React from 'react';
import { CardCategory } from '../components';
import { women } from '../utils/constants';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const Women = () => {
  const { closeSubmenu } = useSubmenuContext();
  return (
    <WomenWrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>women sortiment</h1>
      <div className="underline"></div>
      <div className="women">
        {women.map((sortiment) => {
          const { id, title, image } = sortiment;
          return <CardCategory key={id} title={title} image={image} />;
        })}
      </div>
    </WomenWrapper>
  );
};
const WomenWrapper = styled.article`
  .women {
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

export default Women;
