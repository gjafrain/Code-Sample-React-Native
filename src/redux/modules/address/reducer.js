import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.FETCH_ADDRESS_LIST)]: (
            state,
            action
        ) => ({
            ...state,
            addressList: action.payload || [],
            fetchAddressListLoading: false,
            fetchAddressListFailure: false,
            fetchAddressListSuccess: true,
        }),
        [requestPending(constants.FETCH_ADDRESS_LIST)]: (
            state
        ) => ({
            ...state,
            fetchAddressListLoading: true,
            fetchAddressListFailure: false,
            fetchAddressListSuccess: false,
        }),
        [requestFail(constants.FETCH_ADDRESS_LIST)]: (
            state
        ) => ({
            ...state,
            fetchAddressListLoading: false,
            fetchAddressListFailure: true,
            fetchAddressListSuccess: false,
        }),
        [requestSuccess(constants.ADD_ADDRESS)]: (
            state,
            action
        ) => ({
            ...state,
            addressList: action.payload || [],
            addAddressLoading: false,
            addAddressFailure: false,
            addAddressSuccess: true,
        }),
        [requestPending(constants.ADD_ADDRESS)]: (
            state
        ) => ({
            ...state,
            addAddressLoading: true,
            addAddressFailure: false,
            addAddressSuccess: false,
        }),
        [requestFail(constants.ADD_ADDRESS)]: (
            state
        ) => ({
            ...state,
            addAddressLoading: false,
            addAddressFailure: true,
            addAddressSuccess: false,
        }),
        [requestSuccess(constants.UPDATE_ADDRESS)]: (
            state,
            action
        ) => ({
            ...state,
            addressList: action.payload || [],
            updateAddressLoading: false,
            updateAddressFailure: false,
            updateAddressSuccess: true,
        }),
        [requestPending(constants.UPDATE_ADDRESS)]: (
            state
        ) => ({
            ...state,
            updateAddressLoading: true,
            updateAddressFailure: false,
            updateAddressSuccess: false,
        }),
        [requestFail(constants.UPDATE_ADDRESS)]: (
            state
        ) => ({
            ...state,
            updateAddressLoading: false,
            updateAddressFailure: true,
            updateAddressSuccess: false,
        }),
        [requestSuccess(constants.DELETE_ADDRESS)]: (
            state,
            action
        ) => ({
            ...state,
            addressList: state.addressList.filter(x => x.id !== action.payload.id) || [],
            deleteAddressLoading: false,
            deleteAddressFailure: false,
            deleteAddressSuccess: true,
        }),
        [requestPending(constants.DELETE_ADDRESS)]: (
            state
        ) => ({
            ...state,
            deleteAddressLoading: true,
            deleteAddressFailure: false,
            deleteAddressSuccess: false,
        }),
        [requestFail(constants.DELETE_ADDRESS)]: (
            state
        ) => ({
            ...state,
            deleteAddressLoading: false,
            deleteAddressFailure: true,
            deleteAddressSuccess: false,
        }),
        [requestSuccess(constants.SET_DEFAULT_ADDRESS)]: (
            state,
            action
        ) => ({
            ...state,
            addressList: action.payload || [],
            setDefaultAddressLoading: false,
            setDefaultAddressFailure: false,
            setDefaultAddressSuccess: true,
        }),
        [requestPending(constants.SET_DEFAULT_ADDRESS)]: (
            state
        ) => ({
            ...state,
            setDefaultAddressLoading: true,
            setDefaultAddressFailure: false,
            setDefaultAddressSuccess: false,
        }),
        [requestFail(constants.SET_DEFAULT_ADDRESS)]: (
            state
        ) => ({
            ...state,
            setDefaultAddressLoading: false,
            setDefaultAddressFailure: true,
            setDefaultAddressSuccess: false,
        }),
    },
    initialState()
);
