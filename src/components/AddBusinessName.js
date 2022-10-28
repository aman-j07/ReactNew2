import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const AddBusinessName = (props) => {
  return (
    <>
     <NavBar back="/chooseVisualStyle"/>
    <div id="chooseSpace">
    <h1>Add your business name</h1>
    <h2>You can change this information after your designs have been created</h2>
    <form id="businessNameForm">
        <label>Business name (optional)</label>
        <input value={props.name} onChange={props.changeHandlerName}/>
        <label>Slogan (optional)</label>
        <input value={props.slogan} onChange={props.changeHandlerSlogan}/>
    </form>
    </div>
    <Footer next="/logoPlace"/>
    </>
  )
}

export default AddBusinessName