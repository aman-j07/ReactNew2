import React from 'react'
import globe from './images/globe.gif'


function BodyPart5() {
  return (
    <div id="bodyPart5">
        <h1>Empowering entrepreneurs everywhere</h1>
        <img src={globe}/>
        <div id="bodyPart5Content">
            <div className='bodyPart5Contents'>
            <h3>Millions</h3><p>of merchants Worldwide.</p>
            </div>
            <div className='bodyPart5Contents'>
            <h3>175</h3><p>countries on Shopify</p>
            </div>
            <div className='bodyPart5Contents'>
            <h3>5M</h3><p>jobs supported in 2021</p>
            </div>
            <div className='bodyPart5Contents'>
            <h3>$444B+</h3><p>global economic activity</p>
            </div>        </div>
    </div>
  )
}

export default BodyPart5