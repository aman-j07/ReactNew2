import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const back="<<"
const Cart = (props) => {
    const[total,setTotal]=useState(props.subtotal+100)
    if(props.cart.length>0){
      let length="("+props.cart.length+" items)";
  return (<>
    <Link to="/restaurants"><button id='btnBack'>{back}Back to Toys</button></Link>
<div id="divCartParent"><div id="divCart">
        <h2>Shopping Cart</h2>
        <table id="cartTable">
          <tr><th></th><th></th><th>Price</th></tr>
                {props.cart.map((item,i)=>{
                    return( <><hr id="differHr"/><tr><td><img id="CartProductImg" src={item.photograph}/></td>
                    <td id="tdDetail"><p className="paraItemName">{item.name}</p> <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" /> <p>Qty : {item.quantity}</p> <button index={i} onClick={props.Remove}>Remove</button></td>
                    <td><p id="tdPrice">₹{item.price}.00</p></td>
                    </tr></>)
                })}
        </table>
        
    </div>
    <div id="cartBill">
    <p id='paraSTotal'>Subtotal {length}: <p style={{"fontWeight":"600"}}>₹{props.subtotal}</p></p>
        {/* <p id='paraTaxes'>Taxes: ₹100</p>
        <p id="paraGTotal">Grand Total:₹{total}</p> */}
        <button id="btnBuy">Proceed To Buy</button>
        <div id="divEMI">
          <div><h6>EMI Available</h6><pre>                +</pre></div>
          <p>Your order qualifies for EMI with valid credit cards (not available on purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up). Learn more</p>
        </div>
    </div>
    </div></>
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