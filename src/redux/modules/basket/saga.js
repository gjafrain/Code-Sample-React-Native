import { takeLatest, put } from "redux-saga/effects";
import { requestSuccess } from "../../../utils/fetch";
import { bconstants } from "./constants";

function* openBasket() {
  yield put({
    type: requestSuccess(bconstants.OPEN_BASKET_MODAL),
    payload: true
  });
}

function* closeBasket() {
  yield put({
    type: bconstants.CLOSE_BASKET_MODAL,
    payload: false
  });
}

export default function* rootSaga() {
  yield takeLatest(bconstants.OPEN_BASKET_MODAL, openBasket);
  yield takeLatest(bconstants.CLOSE_BASKET_MODAL, closeBasket);
}
