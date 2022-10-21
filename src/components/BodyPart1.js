import React from 'react'
import videoThumbnail from './images/videoThumbnail.webp'

function BodyPart1() {
  return (
    <div id="bodyDiv1">
      <div className='divContent'>
        <h1>If you can dream it, you can sell it on Shopify</h1>
        <p id="paraBig">Build your business here. Take it anywhere.</p>
        <form>
          <input placeholder='Enter your email address'/><button id="btnStartTrial">Start Free Trial</button>
        </form>
        <p id="paraSmall">Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
      </div>
      <div className='divImage'><img src={videoThumbnail}/></div>
    </div>
  )
}

export default BodyPart1