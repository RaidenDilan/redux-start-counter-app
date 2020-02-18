const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// REDUCER
// state = initialState => default value of initialState
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INC_COUNTER') return {
    ...state,
    counter: state.counter + 1
  };
  if (action.type === 'ADD_COUNTER') return {
    ...state,
    counter: state.counter + action.value
  };

  return state;
};

// STORE
const store = createStore(rootReducer);

console.log('store.getState() 1st', store.getState());

// DISPATCHING ACTION
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
// store.dispatch({ type: 'SUB_COUNTER' });
// store.dispatch({ type: 'DEC_COUNTER' });

console.log('store.getState() 2nd', store.getState());
// SUBSCRIPTION
