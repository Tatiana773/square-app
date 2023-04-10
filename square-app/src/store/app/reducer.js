import {
    GET_MODES_ACTION_REQUEST,
    GET_MODES_ACTION_SUCCESS,
    GET_MODES_ACTION_FAILURE,
    GET_MODE_ACTION_REQUEST,
    GET_MODE_ACTION_SUCCESS,
    GET_MODE_ACTION_FAILURE,
    ADD_CELL_ACTION,
    REMOVE_CELL_ACTION,
} from './actions'

const initialState = {
    modes: [],
    mode: {},
    cells: [],
    isLoading: false,
    error: null,
}

export const appReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_MODES_ACTION_REQUEST: return {...state, isLoading: true, error: null}
        case GET_MODES_ACTION_SUCCESS: return {...state, modes: action.data, isLoading: false}
        case GET_MODES_ACTION_FAILURE: return {...state, isLoading: false, error: action.error}
        case GET_MODE_ACTION_REQUEST: return {...state, isLoading: true, error: null}
        case GET_MODE_ACTION_SUCCESS: return {...state, mode: action.data, isLoading: false}
        case GET_MODE_ACTION_FAILURE: return {...state, isLoading: false, error: action.error}
        case ADD_CELL_ACTION: return {...state, cells: [...state.cells, action.data]}
        case REMOVE_CELL_ACTION: return {...state, cells: state.cells.filter((i) => i.id !== action.id)}
        default: return state
    }
}