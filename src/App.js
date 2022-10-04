import "./App.css";
import Bill from "./components/Bill";
import Header from "./components/Header";
import Products from "./components/Products";
import products from "./components/Data"; 
import { useState } from "react";

function App() {
  
  let[Cart,setCart]=useState([]);
  const[id,setId]=useState("hidden")
  
  const AddToCart=(obj)=>{
    let index='';setId("divCart")
    for(let i=0;i<Cart.length;i++){
      if(obj.id==Cart[i].id){
        index=i;
      }
    }
    if(index!==""){
      Cart[index].quantity++;
    }
    else{
      Cart.push(obj)
    }
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
    hideCart();
    setCart([...Cart])
  }

  const DeleteItem=(e)=>{
    let index=e.target.parentNode.parentNode.getAttribute("id")
    Cart.splice(index,1)
    setCart([...Cart])
    hideCart();
  }

   const hideCart=()=>{
    if(Cart.length==0){
      setId("hidden")
    }
    else{
      setId("divCart")
    }
   }

  const emptyCart=()=>{
   hideCart();
    Cart=[];
    setCart([...Cart])
  }

  return (
    <div className="container">
      <Header />
      <Products products={products} clickHandler={AddToCart}/>
      <Bill cart={Cart} changeHandler={updateQuantity} id={id} clickHandler={emptyCart} clickHandlerDelete={DeleteItem}/>
    </div>
  );
}

export default App;
