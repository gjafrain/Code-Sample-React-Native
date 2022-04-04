import { createAction } from "redux-actions";
import { constants } from "./constants";

export const fetchDeliverySlots = createAction(constants.FETCH_DELIVERY_SLOTS);
export const fetchDeliveryCharges = createAction(constants.FETCH_DELIVERY_CHARGES);
export const placeOrder = createAction(constants.PLACE_ORDER);
export const cancelOrder = createAction(constants.CANCEL_ORDER);
export const fetchOrdersList = createAction(constants.FETCH_ORDERS_LIST);
export const fetchOrdersDetail = createAction(constants.FETCH_ORDER_DETAIL);