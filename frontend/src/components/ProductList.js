import React from 'react';
import { GridView, ListView } from '.';
import { useFilterContext } from '../context/filterContext';

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();

  // const paginate = (data) => {
  //   const itemsPerPage = 10;
  //   const pages = Math.ceil(products.length / itemsPerPage);
  //   const newData = Array.from({ length: pages }, (_, index) => {
  //     const start = index * itemsPerPage;
  //     return data.slice(start, start + itemsPerPage);
  //   });
  //   return newData;
  // };

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry no product matched your search ...
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return <GridView products={products} />;
};

export default ProductList;
