import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.FETCH_DELIVERY_SLOTS)]: (
            state,
            action
        ) => ({
            ...state,
            deliverySlots: action.payload || [],
            fetchDeliveryLoading: false,
            fetchDeliveryFailure: false,
            fetchDeliverySuccess: true,
        }),
        [requestPending(constants.FETCH_DELIVERY_SLOTS)]: (
            state
        ) => ({
            ...state,
            fetchDeliveryLoading: true,
            fetchDeliveryFailure: false,
            fetchDeliverySuccess: false,
        }),
        [requestFail(constants.FETCH_DELIVERY_SLOTS)]: (
            state
        ) => ({
            ...state,
            fetchDeliveryLoading: false,
            fetchDeliveryFailure: true,
            fetchDeliverySuccess: false,
        }),
        [requestSuccess(constants.FETCH_DELIVERY_CHARGES)]: (
            state,
            action
        ) => ({
            ...state,
            fetchDeliveryChargesLoading: false,
            fetchDeliveryChargesFailure: false,
            fetchDeliveryChargesSuccess: true,
        }),
        [requestPending(constants.FETCH_DELIVERY_CHARGES)]: (
            state
        ) => ({
            ...state,
            fetchDeliveryChargesLoading: true,
            fetchDeliveryChargesFailure: false,
            fetchDeliveryChargesSuccess: false,
        }),
        [requestFail(constants.FETCH_DELIVERY_CHARGES)]: (
            state
        ) => ({
            ...state,
            fetchDeliveryChargesLoading: false,
            fetchDeliveryChargesFailure: true,
            fetchDeliveryChargesSuccess: false,
        }),
        [requestSuccess(constants.PLACE_ORDER)]: (
            state,
        ) => ({
            ...state,
            placeOrderLoading: false,
            placeOrderFailure: false,
            placeOrderSuccess: true,
        }),
        [requestPending(constants.PLACE_ORDER)]: (
            state
        ) => ({
            ...state,
            placeOrderLoading: true,
            placeOrderFailure: false,
            placeOrderSuccess: false,
        }),
        [requestFail(constants.PLACE_ORDER)]: (
            state
        ) => ({
            ...state,
            placeOrderLoading: false,
            placeOrderFailure: true,
            placeOrderSuccess: false,
        }),
        [requestSuccess(constants.FETCH_ORDERS_LIST)]: (
            state,
            action
        ) => ({
            ...state,
            orderList: action.payload || [],
            fetchOrderListLoading: false,
            fetchOrderListFailure: false,
            fetchOrderListSuccess: true,
        }),
        [requestPending(constants.FETCH_ORDERS_LIST)]: (
            state
        ) => ({
            ...state,
            fetchOrderListLoading: true,
            fetchOrderListFailure: false,
            fetchOrderListSuccess: false,
        }),
        [requestFail(constants.FETCH_ORDERS_LIST)]: (
            state
        ) => ({
            ...state,
            fetchOrderListLoading: false,
            fetchOrderListFailure: true,
            fetchOrderListSuccess: false,
        }),
        [requestSuccess(constants.FETCH_ORDER_DETAIL)]: (
            state,
            action
        ) => ({
            ...state,
            fetchOrderDetailLoading: false,
            fetchOrderDetailFailure: false,
            fetchOrderDetailSuccess: true,
        }),
        [requestPending(constants.FETCH_ORDER_DETAIL)]: (
            state
        ) => ({
            ...state,
            fetchOrderDetailLoading: true,
            fetchOrderDetailFailure: false,
            fetchOrderDetailSuccess: false,
        }),
        [requestFail(constants.FETCH_ORDER_DETAIL)]: (
            state
        ) => ({
            ...state,
            fetchOrderDetailLoading: false,
            fetchOrderDetailFailure: true,
            fetchOrderDetailSuccess: false,
        }),
    },
    initialState()
);
