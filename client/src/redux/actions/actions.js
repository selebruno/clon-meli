import axios from "axios";
import {
  GET_PRODUCTS,
  GET_DETAIL,
  RESET_DETAIL,
  RESET_PRODUCTS,
  ERROR_DETAIL,
  ERROR_PRODUCT,
} from "../constants";

export function getProducts(title) {
  return async function (dispatch) {
    try {
      const products = await axios.get(`/api/items?q=${title}`);
      dispatch({
        type: GET_PRODUCTS,
        payload: products.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_PRODUCT,
        payload: error.name,
      });
    }
  };
}

export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      const detail = await axios.get(`/api/items/${id}`);
      dispatch({
        type: GET_DETAIL,
        payload: detail.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_DETAIL,
        payload: error.name,
      });
    }
  };
}

export function resetDetail() {
  return (dispatch) => {
    dispatch({
      type: RESET_DETAIL,
    });
  };
}

export function resetProduct() {
  return (dispatch) => {
    dispatch({
      type: RESET_PRODUCTS,
    });
  };
}

