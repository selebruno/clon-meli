/**
 * @jest-environment node
 */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { getProducts, getProductDetail } from "./actions";


describe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ products: [] });

  beforeEach(() => store.clearActions());

  describe("getProducts", () => {
    it('Debería hacer un dispatch con las propiedades type "GET_PRODUCTS" y como payload, el resultado del fetch al backend', async () => {
      return store
        .dispatch(getProducts("mate"))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].payload.length).toBe(4);
        })
        .catch((err) => {
          console.error(err);
          expect(err).toBeUndefined();
        });
    });
  });

  describe("getProductDetail", () => {
    it('Debería hacer un dispatch con las propiedades type "GET_DETAIL" y como payload, el resultado del fetch al backend', async () => {
      return store
        .dispatch(getProductDetail("MLA883673744"))
        .then(() => {
          const actions = store.getActions();
          expect(actions[0].payload).toHaveProperty('author')      
        })
        .catch((err) => {
            console.error(err);
            expect(err).toBeUndefined();
          });
    });
  });
});
