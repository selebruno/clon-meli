
import { GET_PRODUCTS,GET_DETAIL } from "./constants";

const initialState = {
    products: [],
    detail: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
            case GET_DETAIL:
                        return {
                            ...state,
                            detail: action.payload
                        }
            default:
                return state;
    }

}

export default reducer;