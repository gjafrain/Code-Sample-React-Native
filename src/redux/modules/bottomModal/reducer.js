import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess } from "../../../utils/fetch";

export default handleActions(
  {
    [requestSuccess(constants.OPEN_MODAL)]: (
      state,
      action
    ) => ({
      ...state,
      openModal: true,
      viewType: action.payload.type || 'Basket',
      callBack: action.payload.callBack,
      data: action.payload.data
    }),
    [requestSuccess(constants.CLOSE_MODAL)]: (
      state
    ) => ({
      ...state,
      openModal: false,
      viewType: 'Basket'
    }),
    [requestSuccess(constants.SET_VIEW_TYPE)]: (
      state,
      action
    ) => ({
      ...state,
      viewType: action.payload.type || 'Basket',
      callBack: action.payload.callBack,
      data: action.payload.data
    })
  },
  initialState()
);
