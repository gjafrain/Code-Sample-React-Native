/** @format */

import { call, takeLatest } from "redux-saga/effects"
//
import { constants } from "./constants"
import { request } from "../../../utils/fetch"
import { config } from "../../../utils/apiConfig"

function* fetchSearchProducts(action) {
  yield call(
    request({
      type: constants.FETCH_SEARCH_PRODUCT,
      baseURL: config.API_END_POINT,
      method: "POST",
      url: `product/search`,
      data: action.payload.data,
      success: action.payload.onSuccess,
      fail: action.payload.onFail,
    }),
    action
  )
}

function* fetchAllProducts(action) {
  yield call(
    request({
      type: constants.FETCH_ALL_PRODUCT,
      baseURL: config.API_END_POINT,
      method: "GET",
      url: `product/list`,
      data: action.payload.data,
      success: action.payload.onSuccess,
      fail: action.payload.onFail,
    }),
    action
  )
}

function* fetchProductsByCategoryId(action) {
  yield call(
    request({
      type: constants.FETCH_PRODUCT_BY_CATEGORY_ID,
      baseURL: config.API_END_POINT,
      method: "GET",
      url: `product/getProductsByCategoryId?id=${
        action.payload.data?.id ? action.payload.data.id : ""
      }`,
      // data: action.payload.data,
      success: action.payload.onSuccess,
      fail: action.payload.onFail,
    }),
    action
  )
}

export default function* rootSaga() {
  yield takeLatest(constants.FETCH_SEARCH_PRODUCT, fetchSearchProducts)
  yield takeLatest(constants.FETCH_ALL_PRODUCT, fetchAllProducts)
  yield takeLatest(
    constants.FETCH_PRODUCT_BY_CATEGORY_ID,
    fetchProductsByCategoryId
  )
}
