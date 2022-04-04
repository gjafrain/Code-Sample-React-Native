import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.PLACE_AUTO_COMPLETE)]: (
            state
        ) => ({
            ...state,
            placeAutoCompleteLoading: false,
            placeAutoCompleteFailure: false,
            placeAutoCompleteSuccess: true,
        }),
        [requestPending(constants.PLACE_AUTO_COMPLETE)]: (
            state
        ) => ({
            ...state,
            placeAutoCompleteLoading: true,
            placeAutoCompleteFailure: false,
            placeAutoCompleteSuccess: false,
        }),
        [requestFail(constants.PLACE_AUTO_COMPLETE)]: (
            state
        ) => ({
            ...state,
            placeAutoCompleteLoading: false,
            placeAutoCompleteFailure: true,
            placeAutoCompleteSuccess: false,
        }),
        [requestSuccess(constants.QUERY_AUTO_COMPLETE)]: (
            state,
            action
        ) => ({
            ...state,
            queryAutoCompleteSuccess: true,
            queryAutoCompleteLoading: false,
            queryAutoCompleteFailure: false,
        }),
        [requestPending(constants.QUERY_AUTO_COMPLETE)]: (
            state
        ) => ({
            ...state,
            queryAutoCompleteSuccess: false,
            queryAutoCompleteLoading: true,
            queryAutoCompleteFailure: false,
        }),
        [requestFail(constants.QUERY_AUTO_COMPLETE)]: (
            state
        ) => ({
            ...state,
            queryAutoCompleteSuccess: false,
            queryAutoCompleteLoading: false,
            queryAutoCompleteFailure: true,
        }),
    },
    initialState()
);
