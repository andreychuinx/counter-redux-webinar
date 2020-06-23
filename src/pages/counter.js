import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isLoading: state.isLoading,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementAction: () => dispatch({ type: 'INCREMENT' }),
    onDecrementAction: () => dispatch({ type: 'DECREMENT' })
  }
}
const Counter = (props) => {
  console.log(props, 'ini props')
  return (
    <>
    <h1>Counter: {props.counter}</h1>
    <button onClick={() => props.onIncrementAction()}>Increment</button> <br />
    <button onClick={() => props.onDecrementAction()}>Decrement</button>
    <h1>Total Click: 50</h1>
    <h1>List Button Clicked: INCREMENT / DECREMENT</h1>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
