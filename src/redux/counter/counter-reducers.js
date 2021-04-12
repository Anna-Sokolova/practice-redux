import { combineReducers } from "redux";
import actionTypes from "./counter-types";

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload;

    case actionTypes.DECREMENT:
      return state - action.payload;

    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
