import { 
    getModesActionRequest, 
    getModesActionSuccess, 
    getModesActionFailure,
    getModeActionRequest,
    getModeActionSuccess,
    getModeActionFailure,
} from "./actions";
import { 
    getModesCollection,
    getMode
} 
from '../../api/request';

export const getModes = () => {
    return async(dispatch) => {
        dispatch(getModesActionRequest());
        try{
            const responce = await getModesCollection();
            dispatch(getModesActionSuccess(responce));
        }
        catch(error){
            dispatch(getModesActionFailure(error.message));
        }
    }
} 

export const getModeItem = (id) => {
    return async(dispatch) => {
        dispatch(getModeActionRequest());
        try{
            const responce = await getMode(id);
            dispatch(getModeActionSuccess(responce));
        }
        catch(error){
            dispatch(getModeActionFailure(error.message));
        }
    }
} 