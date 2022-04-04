import { createAction } from "redux-actions";
import { constants } from "./constants";

export const addCartItem = createAction(constants.ADD_CART_ITEAM);
export const updateCartItem = createAction(constants.UPDATE_CART_ITEAM);
export const deleteCartItem = createAction(constants.DELETE_CART_ITEAM);
export const fetchCartById = createAction(constants.FETCH_CART_BY_ID);