import { call, takeLatest } from "redux-saga/effects";
// 
import { request } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";

function* fetchAddressList(action) {
    yield call(
        request({
            type: constants.FETCH_ADDRESS_LIST,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `address/list`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* addAddress(action) {
    yield call(
        request({
            type: constants.ADD_ADDRESS,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `address`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* updateAddress(action) {
    yield call(
        request({
            type: constants.UPDATE_ADDRESS,
            baseURL: config.API_END_POINT,
            method: "PUT",
            url: `address`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* deleteAddress(action) {
    yield call(
        request({
            type: constants.DELETE_ADDRESS,
            baseURL: config.API_END_POINT,
            method: "DELETE",
            url: `address`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* setDefaultAddress(action) {
    yield call(
        request({
            type: constants.SET_DEFAULT_ADDRESS,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `address/setDefault`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(constants.FETCH_ADDRESS_LIST, fetchAddressList);
    yield takeLatest(constants.ADD_ADDRESS, addAddress);
    yield takeLatest(constants.UPDATE_ADDRESS, updateAddress);
    yield takeLatest(constants.DELETE_ADDRESS, deleteAddress);
    yield takeLatest(constants.SET_DEFAULT_ADDRESS, setDefaultAddress);
}
