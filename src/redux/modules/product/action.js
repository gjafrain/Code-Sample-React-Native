import { createAction } from "redux-actions";
import { constants } from "./constants";

export const fetchSearchProduct = createAction(constants.FETCH_SEARCH_PRODUCT);
export const fetchAllProduct = createAction(constants.FETCH_ALL_PRODUCT);
export const fetchProductsByCategoryId = createAction(constants.FETCH_PRODUCT_BY_CATEGORY_ID);