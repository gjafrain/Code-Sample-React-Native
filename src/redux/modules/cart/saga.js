import { call, takeLatest } from "redux-saga/effects";
//
import { constants } from "./constants";
import { request } from "../../../utils/fetch";
import { config } from "../../../utils/apiConfig";

function* addCartItem(action) {
    yield call(
        request({
            type: constants.ADD_CART_ITEAM,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `cart`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* updateCartItem(action) {
    yield call(
        request({
            type: constants.UPDATE_CART_ITEAM,
            baseURL: config.API_END_POINT,
            method: "PUT",
            url: `cart`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* deleteCartItem(action) {
    yield call(
        request({
            type: constants.DELETE_CART_ITEAM,
            baseURL: config.API_END_POINT,
            method: "DELETE",
            url: `cart`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchCartById(action) {
    yield call(
        request({
            type: constants.FETCH_CART_BY_ID,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `cart${action.payload.id?`?id=${action.payload.id}`:''}`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(constants.ADD_CART_ITEAM, addCartItem);
    yield takeLatest(constants.UPDATE_CART_ITEAM, updateCartItem);
    yield takeLatest(constants.FETCH_CART_BY_ID, fetchCartById);
}
