import { takeLatest, put } from "redux-saga/effects";
import { requestSuccess } from "../../../utils/fetch";
import { constants } from "./constants";

function* openBottomModal({ payload }) {
  yield put({
    type: requestSuccess(constants.OPEN_MODAL),
    payload: {...payload, status: true, type: payload ? payload.type : '' }
  });
}

function* closeBottomModal() {
  yield put({
    type: requestSuccess(constants.CLOSE_MODAL),
    payload: false
  });
}

function* setViewType({ payload }) {
  yield put({
    type: requestSuccess(constants.SET_VIEW_TYPE),
    payload
  });
}

export default function* rootSaga() {
  yield takeLatest(constants.OPEN_MODAL, openBottomModal);
  yield takeLatest(constants.CLOSE_MODAL, closeBottomModal);
  yield takeLatest(constants.SET_VIEW_TYPE, setViewType);
}
