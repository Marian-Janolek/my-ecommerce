import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_SINGLE_PRODUCT_FAIL,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_REQUEST,
} from '../actions';

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, products_loading: true };

    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.payload.filter(
        (product) => product.featured === true
      );
      const new_products = action.payload.filter(
        (product) => product.new === true
      );
      return {
        ...state,
        products_loading: false,
        products: action.payload,
        featured_products,
        new_products,
      };
    case GET_PRODUCTS_FAIL:
      return { ...state, products_loading: false, product_error: true };
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    case GET_SINGLE_PRODUCT_FAIL:
      return {
        ...state,
        single_product_loading: false,
        single_product_error: true,
      };
    default:
      return state;
  }
};

export default productsReducer;
