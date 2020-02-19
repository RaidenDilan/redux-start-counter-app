const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// REDUCER - Runs First
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

// STORE - Runs 2nd
const store = createStore(rootReducer);

console.log('store.getState() 1st', store.getState());

// SUBSCRIPTION - Runs 3rd
// - is triggered whenever an action is patched
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

// DISPATCHING ACTION Runs Last
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
// store.dispatch({ type: 'SUB_COUNTER' });
// store.dispatch({ type: 'DEC_COUNTER' });

console.log('store.getState() 2nd', store.getState());
