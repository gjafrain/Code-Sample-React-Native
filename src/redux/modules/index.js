import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
// SAGA
import bottomModalSaga from "./bottomModal/saga";
import authSaga from "./auth/saga";
import categorySaga from "./category/saga";
import productSaga from "./product/saga";
import cartSaga from "./cart/saga";
import addressSaga from "./address/saga";
import orderSaga from "./order/saga";
import supportSaga from "./support/saga";
import googleMapSaga from "./googleMap/saga";
// REDUCERS
import bottomModalReducer from "./bottomModal/reducer";
import authReducer from "./auth/reducer";
import categoryReducer from "./category/reducer";
import productReducer from "./product/reducer";
import cartReducer from "./cart/reducer";
import addressReducer from "./address/reducer";
import orderReducer from "./order/reducer";
import supportReducer from "./support/reducer";
import googleMapReducer from "./googleMap/reducer";


const appReducer = combineReducers({
    bottomModal: bottomModalReducer,
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    support: supportReducer,
    googleMap: googleMapReducer
});

export const reducers = (state, action) => {
    if (action.type === 'LOGOUT') {
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}

export const rootSaga = function* () {
    yield all([
        authSaga(),
        bottomModalSaga(),
        categorySaga(),
        productSaga(),
        cartSaga(),
        addressSaga(),
        orderSaga(),
        supportSaga(),
        googleMapSaga()
    ]);
};
