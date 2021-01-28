import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from '../actions/index'

const initialState = {
        cryptos: [],
        isFetching: false,
        error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCH_START:
            return{ ...state,
                cryptos: action.payload,
                 isFetching: true,
                 error: ''
             }

        case FETCH_SUCCESS:
            return{ ...state,
               cryptos: action.payload,
                isFetching: false,
                error: ''
            }

        case FETCH_FAIL: 
        return{ ...state,
            cryptos: action.payload,
             isFetching: false,
             error: action.payload
         }

        default:
            return state;
    }
}