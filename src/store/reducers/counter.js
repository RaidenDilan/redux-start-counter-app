import * as actionTypes from '../actions/actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // let newState = Object.assign({}, state); // we copy the old state in a immutable way.
      // newState = state.counter + 1;
      // return newState;
      return {
        ...state, // pass the old state and return the new state
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    default:
      return state;
  }
};

export default reducer;
