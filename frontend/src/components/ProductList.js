import React from 'react';
import { GridView, ListView } from '.';
import { useFilterContext } from '../context/filterContext';

const ProductList = () => {
  const { grid_view } = useFilterContext();

  if (grid_view === false) {
    return <ListView />;
  }

  return <GridView />;
};

export default ProductList;
