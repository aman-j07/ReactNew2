import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    const[total,setTotal]=useState(props.subtotal+100)
    if(props.cart.length>0){
  return (<>
    <Link to="/restaurants"><button id='btnBack'>Back to Toys</button></Link>
    <div id="divCart">
        <h2>Cart</h2>
        <table id="cartTable">
            <th></th><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th>
                {props.cart.map((item,i)=>{
                    return( <><tr><td><img src={item.photograph}/></td><td>{item.name}</td><td>₹{item.price}</td><td>{item.quantity}</td><td>₹{item.subtotal}</td><td><button index={i} onClick={props.Remove}>Remove</button></td></tr><hr id="differHr"/></>)
                })}
        </table>
        <p id='paraSTotal'>Subtotal: ₹{props.subtotal}</p>
        <p id='paraTaxes'>Taxes: ₹100</p>
        <p id="paraGTotal">Grand Total:₹{total}</p>
    </div>
    </>
  ) }
  else{
    return(<>
        <Link to="/restaurants"><button id='btnBack'>Go back to toys</button></Link>
        <div id="divCart">
            <h2>Your cart looks empty!! Go add your favourite toys.</h2>
        </div>
        </>

    )
  }

}

export default Cart