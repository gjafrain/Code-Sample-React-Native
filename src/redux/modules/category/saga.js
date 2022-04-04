import { call, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";

function* fetchAllCategories(action) {
    yield call(
        request({
            type: constants.FETCH_ALL_CATEGORIES,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `category/list`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchTop10Categories(action) {
    yield call(
        request({
            type: constants.FETCH_TOP10_CATEGORY,
            baseURL: config.API_END_POINT,
            method: "GET",
            url: `category/top10Category`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(constants.FETCH_ALL_CATEGORIES, fetchAllCategories);
    yield takeLatest(constants.FETCH_TOP10_CATEGORY, fetchTop10Categories);
}
