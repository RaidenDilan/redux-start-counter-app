import React, { Component } from 'react';
import { connect } from 'react-redux'; // HOC
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return {
            counter: prevState.counter + 1
          };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return {
            counter: prevState.counter - 1
          };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return {
            counter: prevState.counter + value
          };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return {
            counter: prevState.counter - value
          };
        });
        break;
      default:
        this.setState((prevState) => {
          return {
            counter: prevState.counter
          };
        });
    }
  }

  render () {
    return (
      <div>
        <CounterOutput value={ this.props.ctr } />
        <CounterControl label='Increment' clicked={ this.props.onIncrementCounter } />
        <CounterControl label='Decrement' clicked={ this.props.onDecrementCounter }  />
        <CounterControl label='Add 5' clicked={ this.props.onAddCounter }  />
        <CounterControl label='Subtract 8' clicked={ this.props.onSubtractCounter }  />
        <hr />
        <button onClick={ () => this.props.onStoreResult(this.props.ctr) }>Store Result</button>
        <ul>
          { this.props.storedResults.map(strResult => (
            <li
              key={ strResult.id }
              onClick={ () => this.props.onDeleteResult(strResult.id) }>
              { strResult.value }
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

// run this code block after our class component
const mapStateToProps = state => {
  return {
    // we give access to our counter in our state from redux to our Counter class Component
    ctr: state.ctr.counter, // ctr => counter
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, val: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, val: 8 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElemId: id })
  };
};

// connect is a function that return a .H.O.C.
// connect - 1st args -> mapStateToProps
// connect - 2nd args -> mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
