import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeProvince: (data) => dispatch({ provinceId: data, type: 'ON_CHANGE_PROVINCE' })
  }
}
const province = [{
  id: 1,
  name: 'aceh',
}, {
  id: 2,
  name: 'sumatera utara',
}, {
  id: 3,
  name: 'DKI Jakarta',
}, {
  id: 4,
  name: 'Jawa Barat',
}]

const Province = (props) => {
  return (
    <>
      <select onChange={(e) => props.onChangeProvince(e.target.value)}>
        {province.map((dt, idx) => <option key={idx} value={dt.id}>{dt.name}</option>)}
      </select>
      <Link to="/city">
        <button>to city</button>
      </Link>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Province);
