import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../constants/productsConstants";

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = () => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch(() => {
        dispatch(fetchProductsFailure());
      });
  };
};

export const fetchProduct = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        const product = res.data;
        if (product) {
          dispatch(fetchProductSuccess(product));
        } else {
          dispatch(fetchProductsFailure());
        }
      })
      .catch(() => {
        dispatch(fetchProductsFailure());
      });
  };
};
