import { createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
    step: 1,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/Increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + action.payload,
        },
      };

    case "counter/Decrement":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - action.payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
