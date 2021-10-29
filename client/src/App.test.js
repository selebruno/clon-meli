import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { configure, mount } from "enzyme";
import thunk from 'redux-thunk';
import configureStore from "redux-mock-store";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import * as data from '../products.json'

import App  from "./App";
import Slider from "./components/layout/Slider";
import ProductDetail from "./components/pages/ProductDetail/ProductDetail";
import ProductList from "./components/pages/ProductList/ProductList";
import SearchBar from "./components/pages/SearchBar/SearchBar";
import HomeButtons from './components/layout/HomeButtons/HomeButtons'

configure({ adapter: new Adapter() });

describe('<App />', () => {
  let store;
  const routes = ['/', '/otraRuta', '/items', '/items/MLA883673744'];
  const mockStore = configureStore([thunk]);
  const state = {
    products: data.products,
    detail: data.productDetail,
  };

  beforeEach(() => {
    store = mockStore(state);
  });
  
  const componentToUse = route => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[ route ]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };
  
  describe('El componente SearchBar debe ser renderizado en todas las rutas', () => {
    
     it('Debería ser renderizado en la ruta "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(SearchBar)).toHaveLength(1);
    });

     it('Debería ser renderizado en la ruta "/otraRuta"', () => {
      const app  = mount(componentToUse(routes[1]));
      expect(app.find(SearchBar)).toHaveLength(1);
    });

  });

   it('El componente "Slider" se debería renderizar solamente en la ruta "/"', () => {
    const app = mount(componentToUse(routes[0]));
    expect(app.find(Slider)).toHaveLength(1);
    expect(app.find(SearchBar)).toHaveLength(1);
  });

    it('El componente "HomeButtons" se debería renderizar solamente en la ruta "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(HomeButtons)).toHaveLength(1);
      expect(app.find(SearchBar)).toHaveLength(1);
    });

    it('El componente "ProductList" se debería renderizar solamente en la ruta "/items"', () => {
      const app = mount(componentToUse(routes[2]));
      console.log(app.find(ProductList))
      expect(app.find(ProductList)).toHaveLength(1);
      expect(app.find(Slider)).toHaveLength(0);
      expect(app.find(HomeButtons)).toHaveLength(0);
      expect(app.find(SearchBar)).toHaveLength(1);
    });

   it('El componente "ProductDetail" se debería renderizar solamente en la ruta "/items/:id"', () => {
    const app = mount(componentToUse(routes[3]));
    expect(app.find(ProductDetail)).toHaveLength(1);
    expect(app.find(Slider)).toHaveLength(0);
    expect(app.find(HomeButtons)).toHaveLength(0);
    expect(app.find(SearchBar)).toHaveLength(1);
  });

});