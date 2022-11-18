import React from 'react'
import PropTypes from 'prop-types';

function Data(props) {
  return (
    <div>Data</div>
  )
}
  Data.propTypes={
    name:PropTypes.string.isRequired,
    marks:PropTypes.number,
    total:PropTypes.number,
  }

export default Data