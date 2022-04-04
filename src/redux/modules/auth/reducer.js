import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.CREATE_SESSION_CODE)]: (
            state,
            action
        ) => ({
            ...state,
            sessionCode: action.payload.sessionCode,
            createSessionCodeLoading: false,
            createSessionCodeFailure: false,
            createSessionCodeSuccess: true,
        }),
        [requestPending(constants.CREATE_SESSION_CODE)]: (
            state
        ) => ({
            ...state,
            createSessionCodeLoading: true,
            createSessionCodeFailure: false,
            createSessionCodeSuccess: false,
        }),
        [requestFail(constants.CREATE_SESSION_CODE)]: (
            state
        ) => ({
            ...state,
            sessionCode: '',
            createSessionCodeLoading: false,
            createSessionCodeFailure: true,
            createSessionCodeSuccess: false,
        }),
        [requestSuccess(constants.LOGIN)]: (
            state,
            action
        ) => ({
            ...state,
            user: action.payload,
            loginLoading: false,
            loginFailure: false,
            loginSuccess: true,
        }),
        [requestPending(constants.LOGIN)]: (
            state
        ) => ({
            ...state,
            loginLoading: true,
            loginFailure: false,
            loginSuccess: false,
        }),
        [requestFail(constants.LOGIN)]: (
            state
        ) => ({
            ...state,
            loginLoading: false,
            loginFailure: true,
            loginSuccess: false,
        }),
        [requestSuccess(constants.SIGNUP)]: (
            state,
            action
        ) => ({
            ...state,
            user: { ...state.user, ...action.payload },
            signupLoading: false,
            signupFailure: false,
            signupSuccess: true,
        }),
        [requestPending(constants.SIGNUP)]: (
            state
        ) => ({
            ...state,
            signupLoading: true,
            signupFailure: false,
            signupSuccess: false,
        }),
        [requestFail(constants.SIGNUP)]: (
            state
        ) => ({
            ...state,
            signupLoading: false,
            signupFailure: true,
            signupSuccess: false,
        }),
        [requestSuccess(constants.UPDATE_PROFILE)]: (
            state,
            action
        ) => ({
            ...state,
            user: { ...state.user, ...action.payload },
            updateProfileLoading: false,
            updateProfileFailure: false,
            updateProfileSuccess: true,
        }),
        [requestPending(constants.UPDATE_PROFILE)]: (
            state
        ) => ({
            ...state,
            updateProfileLoading: true,
            updateProfileFailure: false,
            updateProfileSuccess: false,
        }),
        [requestFail(constants.UPDATE_PROFILE)]: (
            state
        ) => ({
            ...state,
            updateProfileLoading: false,
            updateProfileFailure: true,
            updateProfileSuccess: false,
        }),
        [requestSuccess(constants.SEND_OTP)]: (
            state,
            action
        ) => ({
            ...state,
            sendOtpLoading: false,
            sendOtpFailure: false,
            sendOtpSuccess: true,
        }),
        [requestPending(constants.SEND_OTP)]: (
            state
        ) => ({
            ...state,
            sendOtpLoading: true,
            sendOtpFailure: false,
            sendOtpSuccess: false,
        }),
        [requestFail(constants.SEND_OTP)]: (
            state
        ) => ({
            ...state,
            sendOtpLoading: false,
            sendOtpFailure: true,
            sendOtpSuccess: false,
        }),
        [requestSuccess(constants.UPDATE_DEVICE_DETAIL)]: (
            state,
        ) => ({
            ...state,
            updateDeviceDetailLoading: false,
            updateDeviceDetailFailure: false,
            updateDeviceDetailSuccess: true,
        }),
        [requestPending(constants.UPDATE_DEVICE_DETAIL)]: (
            state
        ) => ({
            ...state,
            updateDeviceDetailLoading: true,
            updateDeviceDetailFailure: false,
            updateDeviceDetailSuccess: false,
        }),
        [requestFail(constants.UPDATE_DEVICE_DETAIL)]: (
            state
        ) => ({
            ...state,
            updateDeviceDetailLoading: false,
            updateDeviceDetailFailure: true,
            updateDeviceDetailSuccess: false,
        }),
    },
    initialState()
);
