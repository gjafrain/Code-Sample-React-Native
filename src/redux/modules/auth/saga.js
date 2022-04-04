import { call, put, takeLatest } from "redux-saga/effects";
import { request, requestSuccess } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";
import { multiRemoveValue } from "../../../utils/common";
import asyncStoreConst from "../../../utils/asyncStoreConst";

function* createSession(action) {
    yield call(
        request({
            type: constants.CREATE_SESSION_CODE,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `createSession`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* login(action) {
    yield call(
        request({
            type: constants.LOGIN,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `login`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* signup(action) {
    yield call(
        request({
            type: constants.SIGNUP,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `user`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* updateProfile(action) {
    yield call(
        request({
            type: constants.UPDATE_PROFILE,
            baseURL: config.API_END_POINT,
            method: "PUT",
            url: `user`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* sendOtp(action) {
    yield call(
        request({
            type: constants.SEND_OTP,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `sendOTP`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* updateDeviceDetail(action) {
    yield call(
        request({
            type: constants.UPDATE_DEVICE_DETAIL,
            baseURL: config.API_END_POINT,
            method: "PUT",
            url: `deviceDetail`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* logout() {
    yield multiRemoveValue([asyncStoreConst.FCM_TOKEN, asyncStoreConst.ACCESS_TOKEN, asyncStoreConst.SESSION_CODE]);
    yield put({
        type: requestSuccess(constants.LOGOUT),
        payload: {},
    })
}

export default function* rootSaga() {
    yield takeLatest(constants.CREATE_SESSION_CODE, createSession);
    yield takeLatest(constants.LOGIN, login);
    yield takeLatest(constants.SEND_OTP, sendOtp);
    yield takeLatest(constants.SIGNUP, signup);
    yield takeLatest(constants.LOGOUT, logout);
    yield takeLatest(constants.UPDATE_PROFILE, updateProfile);
    yield takeLatest(constants.UPDATE_DEVICE_DETAIL, updateDeviceDetail);
}
