import React from 'react'
import storeBuilder from './images/storeBuilder.png'
import theme from './images/theme.png'
import appStore from './images/appStore.png'

function BodyPart2() {
  return (
    <>
    <h1 style={{fontSize: "3.75em",width:"65%",margin:"10% 5%",fontWeight:"500"}}>Discover why millions of entrepreneurs choose Shopify to build their business—from Hello World to IPO.</h1>
    <div id="bodyPart2">
    <div id="bodyPart2Inner">
        <img src={storeBuilder}/>
        <img src={theme}/>
        <img src={appStore}/>
    </div>
    </div>
    <div id="bodyPart2Content">
        <div className='bodyPart2Contents'>
            <h3>Store Builder</h3><p>Bring your vision to life with our easy-to-use store creator. No coding expertise required—just your next big idea.</p><a>Build the brand you want </a>
        </div>
        <div className='bodyPart2Contents'>
            <h3>Theme</h3><p>Select from hundreds of customizable templates crafted by a community of world-class designers.</p><a>Explore more Themes </a>
        </div>
        <div className='bodyPart2Contents'>
            <h3>App Store</h3><p>Add more features and functionality to your online store with app extensions from trusted Shopify partners.</p><a>There’s an app for that </a>
        </div>
    </div>
    </>
  )
}

export default BodyPart2