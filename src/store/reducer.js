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
    case 'DELETE_RESULT':
      /* Method => One
       * const id = 2;
       * const newArray = [...state.results];
       * newArray.results.spice(id, 1);
       */
      // METHOD => 2
      // const updatedArray = state.results.filter((results, index) => index !== id); // return true if index !== id
      const updatedArray = state.results.filter(result => result.id !== action.resultElemId); // return true if index !== id
      return {
        ...state,
        results: updatedArray // METHOD => 2
        // results: newArray // METHOD => 1
      };
    default:
      return state;
  }
};

export default reducer;
