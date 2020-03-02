import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
  // const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res // updatedResult - (Data Transforming Logic)
  };
};

// Handling Asynchronous Code using redux-thunk pronounced as 'funk'
export const storeResult = (res) => {
  return function(dispatch, getState) { // use getState method - from redux-thunk to get old result prior to saving new result
    // const oldCounter = getState().ctr.counter;
    // console.log('[oldCounter]', oldCounter);
    setTimeout(() => dispatch(saveResult(res)), 2000);
  };
};

export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElemId: resElId
  };
};
