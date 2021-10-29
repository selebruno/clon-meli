import reducer from "./reducer";
import * as data from "../../../products.json";
import { GET_DETAIL, GET_PRODUCTS, RESET_PRODUCTS,RESET_DETAIL } from "../constants";

describe("Reducer", () => {
  const state = {
    products: [],
    detail: null,
    searchUpdate: false,
  };

  it("Debería retornar el estado inicial si no se pasa un type válido", () => {
    expect(reducer(undefined, [])).toEqual({
      products: [],
      detail: null,
      searchUpdate: false,
    });
  });

  it('Debería guardar en el state los productos obtenidos de nuestro llamado al back cuando action type es "GET_PRODUCTS"', () => {
    const result = reducer(state, {
      type: GET_PRODUCTS,
      payload: data.products,
    });
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      products: data.products,
      detail: null,
      searchUpdate: false,
    });
  });

  it('Debería guardar en el state el detalle de producto obtenido del llamado al back cuando action type es "GET_DETAIL"', () => {
    const result = reducer(state, {
      type: GET_DETAIL,
      payload: data.productDetail,
    });
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      products: [],
      detail: data.productDetail,
      searchUpdate: false,
    });
  });

  it('Debería resetear el estado de productos cuando action type es "RESET_PRODUCTS"', () => {
    const result = reducer(state, { type: RESET_PRODUCTS, payload: [] });
    expect(result).toEqual({
      products: [],
      detail: null,
      searchUpdate: false,
    });
  });

  it('Debería resetear el estado de detalle del producto cuando action type es "RESET_DETAIL"', () => {
    const result = reducer(state, { type: RESET_DETAIL, payload: [] });
    expect(result).toEqual({
      products: [],
      detail: null,
      searchUpdate: false,
    });
  });
});
