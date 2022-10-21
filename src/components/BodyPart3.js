import React from 'react'
import AddToCart from './images/AddToCart.webp'

function BodyPart3() {
  return (
    <div id="bodyPart3">
         <div className='bodyPart3Contents'>
            <h3>Connect with customers everywhere</h3><p>Sell online, in person, or both with the marketing tools, social integrations, and sales channels you need to get your products in front of customers—and out the door.</p><a>Marketing made easy</a>
        </div>
        <div className='bodyPart3Image'>
            <img src={AddToCart}/>
        </div>
    </div>
  )
}

export default BodyPart3