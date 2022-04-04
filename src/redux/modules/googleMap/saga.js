import { call, takeEvery, takeLatest } from "redux-saga/effects";
// 
import { request } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";

function* fetchPlace(action) {
    yield call(
        request({
            type: constants.PLACE_AUTO_COMPLETE,
            baseURL: config.GOOGLE_MAP_API,
            method: "GET",
            url: `address/list`,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

function* fetchQueryAutoComplete(action) {
    yield call(
        request({
            type: constants.QUERY_AUTO_COMPLETE,
            baseURL: config.GOOGLE_MAP_API,
            method: "GET",
            url: `place/queryautocomplete/json?input=${action.payload.data.text}&types=geocode&key=${config.GOOGLE_MAP_API_KEY}`,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}


export default function* rootSaga() {
    yield takeEvery(constants.PLACE_AUTO_COMPLETE, fetchPlace);
    yield takeEvery(constants.QUERY_AUTO_COMPLETE, fetchQueryAutoComplete);
}