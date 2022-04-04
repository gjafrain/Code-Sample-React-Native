import { handleActions } from "redux-actions";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.FETCH_ALL_CATEGORIES)]: (
            state,
            action
        ) => ({
            ...state,
            allCategories: action.payload,
            fetchAllCategoriesPending: false,
            fetchAllCategoriesFailure: false,
            fetchAllCategoriesSuccess: true,
        }),
        [requestPending(constants.FETCH_ALL_CATEGORIES)]: (
            state
        ) => ({
            ...state,
            allCategories: [],
            fetchAllCategoriesPending: true,
            fetchAllCategoriesFailure: false,
            fetchAllCategoriesSuccess: false,
        }),
        [requestFail(constants.FETCH_ALL_CATEGORIES)]: (
            state
        ) => ({
            ...state,
            fetchAllCategoriesPending: false,
            fetchAllCategoriesFailure: true,
            fetchAllCategoriesSuccess: false,
        }),
        [requestSuccess(constants.FETCH_TOP10_CATEGORY)]: (
            state,
            action
        ) => ({
            ...state,
            top10Categories: action.payload,
            fetchTop10CategoriesPending: false,
            fetchTop10CategoriesFailure: false,
            fetchTop10CategoriesSuccess: true,
        }),
        [requestPending(constants.FETCH_TOP10_CATEGORY)]: (
            state
        ) => ({
            ...state,
            top10Categories: [],
            fetchTop10CategoriesPending: true,
            fetchTop10CategoriesFailure: false,
            fetchTop10CategoriesSuccess: false,
        }),
        [requestFail(constants.FETCH_TOP10_CATEGORY)]: (
            state
        ) => ({
            ...state,
            fetchTop10CategoriesPending: false,
            fetchTop10CategoriesFailure: true,
            fetchTop10CategoriesSuccess: false,
        })
    },
    initialState()
);
