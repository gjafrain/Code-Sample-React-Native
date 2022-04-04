import { call, takeLatest } from "redux-saga/effects";
// 
import { request } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";


function* placeOrder(action) {
    yield call(
        request({
            type: constants.PLACE_ORDER,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `order/placeOrder`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchDeliverySlots(action) {
    yield call(
        request({
            type: constants.FETCH_DELIVERY_SLOTS,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `order/deliveryTimeSlots`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchDeliveryCharges(action) {
    yield call(
        request({
            type: constants.FETCH_DELIVERY_CHARGES,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `order/deliveryCharges`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchOrderList(action) {
    yield call(
        request({
            type: constants.FETCH_ORDERS_LIST,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `order/list`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchOrderDetail(action) {
    yield call(
        request({
            type: constants.FETCH_ORDER_DETAIL,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `order/detail/${action.payload.data.orderId}`,
            // data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* cancelOrder(action) {
    yield call(
        request({
            type: constants.CANCEL_ORDER,
            baseURL: config.API_END_POINT,
            method: "DELETE",
            url: `order/cancel`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(constants.PLACE_ORDER, placeOrder);
    yield takeLatest(constants.FETCH_DELIVERY_SLOTS, fetchDeliverySlots);
    yield takeLatest(constants.FETCH_DELIVERY_CHARGES, fetchDeliveryCharges);
    yield takeLatest(constants.FETCH_ORDERS_LIST, fetchOrderList);
    yield takeLatest(constants.FETCH_ORDER_DETAIL, fetchOrderDetail);
    yield takeLatest(constants.CANCEL_ORDER, cancelOrder);
}
