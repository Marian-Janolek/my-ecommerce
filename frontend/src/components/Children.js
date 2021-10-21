import React from 'react';
import { CardCategory } from '../components';
import { children } from '../utils/constants';
import styled from 'styled-components';
import { useSubmenuContext } from '../context/submenuContext';

const Children = () => {
  const { closeSubmenu } = useSubmenuContext();

  return (
    <ChildrenWrapper className="section-center" onMouseOver={closeSubmenu}>
      <h1>Children sortiment</h1>
      <div className="underline"></div>
      <div className="children">
        {children.map((sortiment) => {
          const { id, title, image } = sortiment;
          return <CardCategory key={id} title={title} image={image} />;
        })}
      </div>
    </ChildrenWrapper>
  );
};
const ChildrenWrapper = styled.article`
  .children {
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

export default Children;
