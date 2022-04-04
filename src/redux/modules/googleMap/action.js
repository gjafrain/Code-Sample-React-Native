import { createAction } from "redux-actions";
import { constants } from "./constants";

export const fetchPlace = createAction(constants.PLACE_AUTO_COMPLETE);
export const fetchPlaceAutoComplete = createAction(constants.QUERY_AUTO_COMPLETE);