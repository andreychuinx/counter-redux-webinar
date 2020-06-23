import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    provinceId: state.provinceId,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}
const City = (props) => {
  console.log(props)
  return (
    <>
    <p>{props.provinceId}</p>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
