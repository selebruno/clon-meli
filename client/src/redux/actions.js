import axios from 'axios';
import { GET_PRODUCTS,GET_DETAIL } from './constants';


export function getProducts(title){
    return async function(dispatch){
        var products = await axios.get("http://localhost:3001/api/items?title=" + title,{
});
        return dispatch({
        type: GET_PRODUCTS,
        payload: products.data
        })
    }
}


export function getProductDetail(id) {
    return async function (dispatch) {
      var detail = await axios.get("http://localhost:3001/api/items/" + id);
      return dispatch({ 
          type: GET_DETAIL, 
          payload: detail.data} );
    };
  }

 