export const GET_MODES_ACTION_REQUEST = "GET_MODES_ACTION_REQUEST"
export const GET_MODES_ACTION_SUCCESS = "GET_MODES_ACTION_SUCCESS"
export const GET_MODES_ACTION_FAILURE = "GET_MODES_ACTION_FAILURE"
export const GET_MODE_ACTION_REQUEST = "GET_MODE_ACTION_REQUEST"
export const GET_MODE_ACTION_SUCCESS = "GET_MODE_ACTION_SUCCESS"
export const GET_MODE_ACTION_FAILURE = "GET_MODE_ACTION_FAILURE"
export const ADD_CELL_ACTION = "ADD_CELL_ACTION"
export const REMOVE_CELL_ACTION = "REMOVE_CELL_ACTION"

export const getModesActionRequest = () => {
    return{
        type: GET_MODES_ACTION_REQUEST,
    }
}

export const getModesActionSuccess = (data) => {
    return{
        type: GET_MODES_ACTION_SUCCESS,
        data,
    }
}

export const getModesActionFailure = (error) => {
    return{
        type: GET_MODES_ACTION_FAILURE,
        error,
    }
}

export const getModeActionRequest = () => {
    return{
        type: GET_MODE_ACTION_REQUEST,
    }
}

export const getModeActionSuccess = (data) => {
    return{
        type: GET_MODE_ACTION_SUCCESS,
        data,
    }
}

export const getModeActionFailure = (error) => {
    return{
        type: GET_MODE_ACTION_FAILURE,
        error,
    }
}

export const addCellAction = (data) => {
    return{
        type: ADD_CELL_ACTION,
        data,
    }
}

export const removeCellAction = (id) => {
    return{
        type: REMOVE_CELL_ACTION,
        id,
    }
}

