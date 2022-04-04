import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.SUPPORT)]: (
            state
        ) => ({
            ...state,
            supportSendPending: false,
            supportSendFailure: false,
            supportSendSuccess: true,
        }),
        [requestPending(constants.SUPPORT)]: (
            state
        ) => ({
            ...state,
            supportSendPending: true,
            supportSendFailure: false,
            supportSendSuccess: false,
        }),
        [requestFail(constants.SUPPORT)]: (
            state
        ) => ({
            ...state,
            supportSendPending: false,
            supportSendFailure: true,
            supportSendSuccess: false,
        }),
    },
    initialState()
);
