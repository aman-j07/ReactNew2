import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import loading from "./4.gif";
import { useEffect, useState } from "react";

const Library = () => {
  const [items, setItems] = useState([]);
  const [arrName,setArrName]=useState("products")
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const[products,setProducts]=useState([]);

  useEffect(() => {
    document.getElementById("divLoading").classList.remove("hidden");
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setItems(data)
        document.getElementById("divLoading").classList.add("hidden");
      });
      fetch("https://api.escuelajs.co/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
      fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);
  
  if(arrName==="products"){
  return (
    <>
      <div id="navBar">
      <div id="divLogo"><ShoppingBasketIcon /> <pre> Shop</pre></div><div id="divLinks"><p>Home</p><p onClick={()=>{setArrName("categories");setItems([...categories])}}>Categories</p><p onClick={()=>{setArrName("products");setItems([...products])}}>Products</p><p onClick={()=>{setArrName("users");setItems([...users])}}>Users</p></div>
        <div id="divLoading" className="hidden">
            Loading <img src={loading} />
          </div>
      </div>
      <div id="list">
       {
        items.map(item=>{
          return <div  id={item.id} key={item.id} className="item">
            <img alt="Image Not available" src={item.images[0]}/>
            <div className="itemDetails"><p id="paraitemName">{item.title}</p><p id='paraPlace'>₹{item.price}</p></div>
          </div>
        })
       }
       </div>
    </>
  );
}
else if(arrName==="categories"){
  return (
    <>
       <div id="navBar">
      <div id="divLogo"><ShoppingBasketIcon /> <pre> Shop</pre></div><div id="divLinks"><p>Home</p><p onClick={()=>{setArrName("categories");setItems([...categories])}}>Categories</p><p onClick={()=>{setArrName("products");setItems([...products])}}>Products</p><p onClick={()=>{setArrName("users");setItems([...users])}}>Users</p></div>
        <div id="divLoading" className="hidden">
            Loading <img src={loading} />
          </div>
      </div>
      <div id="list">
       {
        items.map(item=>{
          return <div  id={item.id} key={item.id} className="item">
            <img alt="Image Not available" src={item.image}/>
            <div className="itemDetails"><p id="paraitemName">{item.name}</p></div>
          </div>
        })
       }
       </div>
    </>
  );
}
else if(arrName==="users"){
  return (
    <>
       <div id="navBar">
      <div id="divLogo"><ShoppingBasketIcon /> <pre> Shop</pre></div><div id="divLinks"><p>Home</p><p onClick={()=>{setArrName("categories");setItems([...categories])}}>Categories</p><p onClick={()=>{setArrName("products");setItems([...products])}}>Products</p><p onClick={()=>{setArrName("users");setItems([...users])}}>Users</p></div>
        <div id="divLoading" className="hidden">
            Loading <img src={loading} />
          </div>
      </div>
      <div id="list">
       {
        items.map(item=>{
          return <div  id={item.id} key={item.id} className="item">
            <img alt="Image Not available" src={item.avatar}/>
            <div className="itemDetails"><p id="paraitemName">{item.name}</p><p id='paraPlace'>{item.email}</p></div>
          </div>
        })
       }
       </div>
    </>
  );
}
};


export default Library;
