import {FETCH_MISSIONS_START, FETCH_MISSIONS_SUCCESS, FETCH_MISSIONS_FAILURE} from '../actions'

const initialState = {
    isLoading: false,
    missionsData: [],
    error: ''
}

export const missionsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MISSIONS_START: 
        return {
            ...state,
            isLoading: true, 
            error: ''
        }

        case FETCH_MISSIONS_SUCCESS: 
        return {
            ...state, 
            isLoading: false,
            missionsData: action.payload,
            error: ''
        }

        case FETCH_MISSIONS_FAILURE: 
        return {
            ...state,
            isLoading: false,
            error: action.payload 
        }

        default:
        return state
    }
}