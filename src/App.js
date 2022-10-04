import "./App.css";
import Bill from "./components/Bill";
import Header from "./components/Header";
import Products from "./components/Products";
import products from "./components/Data"; 
import { useState } from "react";

function App() {

  let[Cart,setCart]=useState([]);
  
  const AddToCart=(obj)=>{
    let index='';
    console.log(obj)
    for(let i=0;i<Cart.length;i++){
      if(obj.id==Cart[i].id){
        index=i;
      }
    }
    if(index!==""){
      Cart[index].quantity++;
    }
    else{
      obj.quantity=1;
      Cart.push(obj)
    }
    console.log(Cart)
    setCart([...Cart])
  }

  const updateQuantity=(e)=>{
    let index=e.target.parentNode.parentNode.parentNode.getAttribute("id");
    let txt=e.target.innerHTML;
    if(txt==="+"){
      Cart[index].quantity++;
    }
    else if(txt==="-"){
      if( Cart[index].quantity>1){
      Cart[index].quantity--;
      }
      else if(Cart[index].quantity===1){
        Cart.splice(index,1)
      }
    }
    setCart([...Cart])
  }

  const DeleteItem=(e)=>{
    let index=e.target.parentNode.parentNode.getAttribute("id")
    Cart.splice(index,1)
    setCart([...Cart])
  }
  const emptyCart=()=>{
    Cart=[];
    setCart([...Cart])
  }

  return (
    <div className="container">
      <Header />
      <Products products={products} clickHandler={AddToCart}/>
      <Bill cart={Cart} changeHandler={updateQuantity} clickHandler={emptyCart} clickHandlerDelete={DeleteItem}/>
    </div>
  );
}

export default App;
