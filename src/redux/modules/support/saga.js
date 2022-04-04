import { call, takeLatest } from "redux-saga/effects";
import { request } from "../../../utils/fetch";
import { constants } from "./constants";
import { config } from "../../../utils/apiConfig";

function* sendSupport(action) {
    
    yield call(
        request({
            type: constants.SUPPORT,
            baseURL: config.API_END_POINT,
            method: "POST",
            url: `support`,
            data: action.payload.data,
            success: action.payload.onSuccess,
            fail: action.payload.onFail
        }),
        action
    );
}

export default function* rootSaga() {
    yield takeLatest(constants.SUPPORT, sendSupport);
}
