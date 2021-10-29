import React from 'react';
import { configure,shallow } from 'enzyme';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; 

import SearchBar from './SearchBar';

configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);

describe('<SearchBar />', () => {
    describe('render()', () => {
      test('Renderiza el componente correctamente', () => {
        const store = mockStore({
          products: [],
          detail: null,
          searchUpdate: false,
          });  
        const wrapper = shallow(
            <Provider store={store}>
              <SearchBar />
            </Provider>
          )
        const component = wrapper.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
  });

