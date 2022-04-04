import { createAction } from "redux-actions";
import { constants } from "./constants";

export const createSessionCode = createAction(constants.CREATE_SESSION_CODE);
export const login = createAction(constants.LOGIN);
export const signup = createAction(constants.SIGNUP);
export const logout = createAction(constants.LOGOUT);
export const updateProfile = createAction(constants.UPDATE_PROFILE);
export const sendOtp = createAction(constants.SEND_OTP);
export const updatDeviceDetail = createAction(constants.UPDATE_DEVICE_DETAIL);