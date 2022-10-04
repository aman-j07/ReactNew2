import React from 'react'

const Bill = (props) => {
    const {cart,changeHandler,id,clickHandler,clickHandlerDelete}=props;
    let total=0;
    if(cart.length>0){
  return (
    <div id={id}>
		<div id="cartHead"><h1>Cart---	</h1><button id="btnEmptyCart" onClick={clickHandler}><i className="fa-solid fa-trash-can"></i></button></div>
		<table id="tableCart">
        {cart.map((item,i)=>{  total+=(parseFloat(parseFloat(item.price)*parseFloat(item.quantity))); return <tr id={i} key={item.id}><td><img src={item.image}></img></td><td><h3>{item.name}</h3><p>Price: ₹{item.price}.00</p><p>Quantity: <button className='btnUpdate' onClick={changeHandler}>-</button><p id='paraQuantity'>{item.quantity}</p><button className='btnUpdate' onClick={changeHandler}>+</button></p><p>Total price: ${item.price*item.quantity}.00 </p></td><td id='cross' ><button className='cross' onClick={clickHandlerDelete}>X</button></td></tr>})}
        </table>
        <hr></hr>
		<strong id="gTotal">Grand total: ₹{total}.00</strong>
	</div>
  )
    }
    else{
      return <></>
    }
}

export default Bill