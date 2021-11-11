import React, { useContext, useReducer, useEffect } from 'react';
import reducer from '../reducer/filterReducer';
import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  LOAD_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
} from '../actions';
import { useProductContext } from './productsContext';

const initialState = {
  grid_view: true,
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    text: '',
    brand: 'all',
    category: 'all',
    subCategory: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilters,
        updateSort,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
