import React from 'react';
import { configure,shallow } from 'enzyme';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; 
import ProductDetail from './ProductDetail';

configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);

describe('<ProductDetail />', () => {
      
    it('Renderiza el componente correctamente', () => {
        let productDetail;
        const store = mockStore({
          products:[],  
          detail:null
          });  
          productDetail = shallow(
            <Provider store={store}>
              <ProductDetail />
            </Provider>
          )
        const component = productDetail.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
