import axios from "axios";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../constants/productConstants";

export const fetchProductRequest = () => {
  return {
    type: FETCH_PRODUCT_REQUEST,
  };
};

export const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

export const fetchProductFailure = () => {
  return {
    type: FETCH_PRODUCT_FAILURE,
  };
};

export const fetchProduct = (productId) => {
  return (dispatch) => {
    dispatch(fetchProductRequest());
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        const product = res.data;
        if (product) {
          dispatch(fetchProductSuccess(product));
        } else {
          dispatch(fetchProductFailure());
        }
      })
      .catch(() => {
        dispatch(fetchProductFailure());
      });
  };
};
