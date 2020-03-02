import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // change data...
      /* return our updated results */
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result // * 2 - (Data Transforming Logic)
        }) // return a new array and pass our args
      };
    case actionTypes.DELETE_RESULT:
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
