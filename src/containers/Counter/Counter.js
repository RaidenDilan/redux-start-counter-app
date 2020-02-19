import React, { Component } from 'react';
import { connect } from 'react-redux'; // HOC
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0
  }

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
        <CounterControl label='Increment' clicked={ () => this.counterChangedHandler('inc') } />
        <CounterControl label='Decrement' clicked={ () => this.counterChangedHandler('dec') }  />
        <CounterControl label='Add 5' clicked={ () => this.counterChangedHandler('add', 5) }  />
        <CounterControl label='Subtract 5' clicked={ () => this.counterChangedHandler('sub', 5) }  />
      </div>
    );
  }
}

// run this code block after our class component
const mapStateToProps = state => {
  return {
    // we give access to our counter in our state from redux to our Counter class Component
    ctr: state.counter // ctr => counter
  };
};

// connect is a function that return a .H.O.C.
export default connect(mapStateToProps)(Counter);
