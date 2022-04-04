import { handleActions } from "redux-actions";
import { get } from "lodash";
import { initialState } from "./initialState";
import { constants } from "./constants";
import { requestSuccess, requestPending, requestFail } from "../../../utils/fetch";

export default handleActions(
    {
        [requestSuccess(constants.ADD_CART_ITEAM)]: (
            state,
            action
        ) =>{
            return ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            addCartItemPending: false,
            addCartItemFailure: false,
            addCartItemSuccess: true,
        })},
        [requestPending(constants.ADD_CART_ITEAM)]: (
            state
        ) => ({
            ...state,
            addCartItemPending: true,
            addCartItemFailure: false,
            addCartItemSuccess: false,
        }),
        [requestFail(constants.ADD_CART_ITEAM)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            addCartItemPending: false,
            addCartItemFailure: true,
            addCartItemSuccess: false,
        }),
        [requestSuccess(constants.UPDATE_CART_ITEAM)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            updateCartPending: false,
            updateCartFailure: false,
            updateCartSuccess: true,
        }),
        [requestPending(constants.UPDATE_CART_ITEAM)]: (
            state
        ) => ({
            ...state,
            updateCartPending: true,
            updateCartFailure: false,
            updateCartSuccess: false,
        }),
        [requestFail(constants.UPDATE_CART_ITEAM)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            updateCartPending: false,
            updateCartFailure: true,
            updateCartSuccess: false,
        }),
        [requestSuccess(constants.DELETE_CART_ITEAM)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            deleteCartPending: false,
            deleteCartFailure: false,
            deleteCartSuccess: true,
        }),
        [requestPending(constants.DELETE_CART_ITEAM)]: (
            state
        ) => ({
            ...state,
            deleteCartPending: true,
            deleteCartFailure: false,
            deleteCartSuccess: false,
        }),
        [requestFail(constants.DELETE_CART_ITEAM)]: (
            state
        ) => ({
            ...state,
            deleteCartPending: false,
            deleteCartFailure: true,
            deleteCartSuccess: false,
        }),
        [requestSuccess(constants.FETCH_CART_BY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            fetchCartPending: false,
            fetchCartFailure: false,
            fetchCartSuccess: true,
        }),
        [requestPending(constants.FETCH_CART_BY_ID)]: (
            state
        ) => ({
            ...state,
            fetchCartPending: true,
            fetchCartFailure: false,
            fetchCartSuccess: false,
        }),
        [requestFail(constants.FETCH_CART_BY_ID)]: (
            state,
            action
        ) => ({
            ...state,
            cart: action.payload,
            items: get(action.payload, 'cartItems', []),
            fetchCartPending: false,
            fetchCartFailure: true,
            fetchCartSuccess: false,
        }),
    },
    initialState()
);
