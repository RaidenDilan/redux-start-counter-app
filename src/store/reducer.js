const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // let newState = Object.assign({}, state); // we copy the old state in a immutable way.
      // newState = state.counter + 1;
      // return newState;
      return {
        ...state, // pass the old state and return the new state
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.val
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - action.val
      };
    case 'STORE_RESULT':
      /* return our updated results */
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter
        }) // return a new array and pass our args
      };
    // case 'DELETE_RESULT':
    //   return {
    //     results: state.results
    //   };
    default:
      return state;
  }
};

export default reducer;
