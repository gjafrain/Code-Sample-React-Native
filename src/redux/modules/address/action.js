import { createAction } from "redux-actions";
import { constants } from "./constants";

export const fetchAddressList = createAction(constants.FETCH_ADDRESS_LIST);
export const addAddrress = createAction(constants.ADD_ADDRESS);
export const deleteAddress = createAction(constants.DELETE_ADDRESS);
export const updateAddress = createAction(constants.UPDATE_ADDRESS);
export const setDefaultAddress = createAction(constants.SET_DEFAULT_ADDRESS);