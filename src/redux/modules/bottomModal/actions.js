import { createAction } from "redux-actions";
import { constants } from "./constants";

export const closeBottomModal = createAction(constants.CLOSE_MODAL);
export const openBottomModal = createAction(constants.OPEN_MODAL);
export const setViewType = createAction(constants.SET_VIEW_TYPE);