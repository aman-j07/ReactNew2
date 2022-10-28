import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div id="footer">
        <Link to={props.next}><button id="btnNext">NEXT</button></Link>
    </div>
  )
}

export default Footer