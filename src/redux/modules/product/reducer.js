import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.FETCH_SEARCH_PRODUCT)]: (
            state,
            action
        ) => ({
            ...state,
            serachProducts: action.payload,
            fetchSearchProductsPending: false,
            fetchSearchProductsFailure: false,
            fetchSearchProductsSuccess: true,
        }),
        [requestPending(constants.FETCH_SEARCH_PRODUCT)]: (
            state
        ) => ({
            ...state,
            serachProducts: [],
            fetchSearchProductsPending: true,
            fetchSearchProductsFailure: false,
            fetchSearchProductsSuccess: false,
        }),
        [requestFail(constants.FETCH_SEARCH_PRODUCT)]: (
            state
        ) => ({
            ...state,
            fetchSearchProductsPending: false,
            fetchSearchProductsFailure: true,
            fetchSearchProductsSuccess: false,
        }),
        [requestSuccess(constants.FETCH_ALL_PRODUCT)]: (
            state,
            action
        ) => ({
            ...state,
            allProducts: action.payload,
            fetchAllProductsPending: false,
            fetchAllProductsFailure: false,
            fetchAllProductsSuccess: true,
        }),
        [requestPending(constants.FETCH_ALL_PRODUCT)]: (
            state
        ) => ({
            ...state,
            allProducts: [],
            fetchAllProductsPending: true,
            fetchAllProductsFailure: false,
            fetchAllProductsSuccess: false,
        }),
        [requestFail(constants.FETCH_ALL_PRODUCT)]: (
            state
        ) => ({
            ...state,
            fetchAllProductsPending: false,
            fetchAllProductsFailure: true,
            fetchAllProductsSuccess: false,
        }),
        [requestSuccess(constants.FETCH_PRODUCT_BY_CATEGORY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            categoryProducts: action.payload,
            fetchCategoryProductsPending: false,
            fetchCategoryProductsFailure: false,
            fetchCategoryProductsSuccess: true,
        }),
        [requestPending(constants.FETCH_PRODUCT_BY_CATEGORY_ID)]: (
            state
        ) => ({
            ...state,
            categoryProducts: {},
            fetchCategoryProductsPending: true,
            fetchCategoryProductsFailure: false,
            fetchCategoryProductsSuccess: false,
        }),
        [requestFail(constants.FETCH_PRODUCT_BY_CATEGORY_ID)]: (
            state
        ) => ({
            ...state,
            fetchCategoryProductsPending: false,
            fetchCategoryProductsFailure: true,
            fetchCategoryProductsSuccess: false,
        }),
    },
    initialState()
);
