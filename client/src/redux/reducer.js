
import { GET_PRODUCTS,GET_DETAIL,RESET_DETAIL,RESET_PRODUCTS } from "./constants";

const initialState = {
    products: [],
    detail: null
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
                            case RESET_DETAIL:
                                return {
                                    ...state,
                                    detail: null
                                }
                                case RESET_PRODUCTS:
                                return {
                                    ...state,
                                    products: []
                                }
            default:
                return state;
    }

}

export default reducer;