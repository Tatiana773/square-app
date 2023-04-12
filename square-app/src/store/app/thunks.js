import {
  getModesActionRequest,
  getModesActionSuccess,
  getModesActionFailure,
} from "./actions";

import { getModesCollection } from "../../api/modes.api";

export const getModes = () => {
  return async (dispatch) => {
    dispatch(getModesActionRequest());

    try {
      const responce = await getModesCollection();
      dispatch(getModesActionSuccess(responce.data));
    } catch (error) {
      dispatch(getModesActionFailure(error.message));
    }
  };
};
