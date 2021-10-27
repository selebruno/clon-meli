import axios from "axios";
import {
  GET_PRODUCTS,
  GET_DETAIL,
  RESET_DETAIL,
  RESET_PRODUCTS,
  SEARCH_UPADTE,
  SEARCH_UPADTE_FALSE,
} from "./constants";

export function getProducts(title) {
  return async function (dispatch) {
    const products = await axios.get(
      `http://localhost:3001/api/items?q=${title}`
    );
    dispatch({
      type: GET_PRODUCTS,
      payload: products.data,
    });
  };
}

export function getProductDetail(id) {
  return async function (dispatch) {
    const detail = await axios.get(`http://localhost:3001/api/items/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: detail.data,
    });
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

export function searchUpdate() {
  return (dispatch) => {
    dispatch({
      type: SEARCH_UPADTE,
    });
  };
}

export function searchUpdateFalse() {
  return (dispatch) => {
    dispatch({
      type: SEARCH_UPADTE_FALSE,
    });
  };
}
