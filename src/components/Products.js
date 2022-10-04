import React from 'react'

const Products = (props) => {
    const {products,clickHandler}=props;
    const AddToCart=(e)=>{
      let index=e.target.parentNode.getAttribute("id")
      let obj=products[index-1];
      clickHandler(obj);
    }
  return (
    <div id="products">
        <h2>Products</h2>
        {products.map((item)=>{return ( <div id={item.id} key={item.id} className='product'><img src={item.image}/><h3 className='title'><a href='#'>{item.name}</a></h3><span>Price: ₹{item.price}.00</span><a className='add-to-cart' onClick={AddToCart}>Add To Cart</a></div>)})}
    </div>
  )
}

export default Products