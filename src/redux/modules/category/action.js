import { createAction } from "redux-actions";
import { constants } from "./constants";

export const fetchAllCategories = createAction(constants.FETCH_ALL_CATEGORIES);
export const fetchTop10Categories = createAction(constants.FETCH_TOP10_CATEGORY);