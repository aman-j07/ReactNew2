import React from 'react'
import PropTypes from 'prop-types';

function Child(props) {
  return (
    <div>
      Child
    </div>
  )
}
Child.propTypes = {
    name: PropTypes.string,
    obj:PropTypes.object,
    num:PropTypes.number,
    bool:PropTypes.bool,
    func:PropTypes.func,
    sym:PropTypes.symbol,
  };
  
export default Child