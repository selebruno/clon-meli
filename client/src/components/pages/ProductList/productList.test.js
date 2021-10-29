import React from 'react';
import { configure,shallow } from 'enzyme';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; 
import SearchBar from '../SearchBar/SearchBar';

configure({ adapter: new Adapter() });
const mockStore = configureStore([thunk]);

describe('<SearchBar />', () => {
      
    it('Renderiza el componente correctamente', () => {
        let searchBar;
        const store = mockStore({
          products:[],  
          detail:null
          });  
          searchBar = shallow(
            <Provider store={store}>
              <SearchBar />
            </Provider>
          )
        const component = searchBar.dive();
  
        expect(toJson(component)).toMatchSnapshot();
      });
    });
