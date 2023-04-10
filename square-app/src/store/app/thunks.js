import { 
    getModesActionRequest, 
    getModesActionSuccess, 
    getModesActionFailure,
} from "./actions";
import { 
    getModesCollection,
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
