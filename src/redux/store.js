import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import counterReducer from "./counter/counter-reducers";
// const initialState = {
//   counter: {
//     value: 0,
//     step: 1,
//   },
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "counter/Increment":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + action.payload,
//         },
//       };

//     case "counter/Decrement":
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
