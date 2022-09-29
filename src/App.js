import "./App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button } from "@mui/material";
import { useState } from "react";
import { Cart } from "./components/Drawer";
import Footer from "./components/Footer";

const products = [
  {
    name: "Tomato",
    image: "http://www.way2door.com/images/products/tamato.jpg",
    price: 50,
    weight: "1kg",
    category: "vegetable",
  },
  {
    name: "Potato",
    image: "http://www.way2door.com/images/products/potato.jpg",
    price: 10,
    weight: "1kg",
    category: "vegetable",
  },
  {
    name: "Onion",
    image: "http://www.way2door.com/images/products/onion.jpg",
    price: 30,
    weight: "1kg",
    category: "vegetable",
  },
  {
    name: "Round Brinjal (Bharta)",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Large%20Round%20Brinjal%20(Bharta).jpg",
    price: 26,
    weight: "500g",
    category: "vegetable",
  },
  {
    name: "Long Brinjal",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Long%20Brinjal-way2door.jpg",
    price: 25,
    weight: "500g",
    category: "vegetable",
  },
  {
    name: "Lady Finger",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Lady%20Finger-way2door.jpg",
    price: 40,
    weight: "500g",
    category: "vegetable",
  },
  {
    name: "Green Chilli",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Green%20Chilli.jpg",
    price: 21,
    weight: "250g",
    category: "vegetable",
  },
  {
    name: "Ginger",
    image: "http://www.way2door.com/images/products/ginger_adrak.jpg",
    price: 20,
    weight: "250g",
    category: "vegetable",
  },
  {
    name: "Parval",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Pointed%20Gourd%20(Parval).jpg",
    price: 22,
    weight: "250g",
    category: "vegetable",
  },
  {
    name: "Green Capsicum",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Green%20Capsicum-way2door.jpg",
    price: 50,
    weight: "250g",
    category: "vegetable",
  },
  {
    name: "Coriander",
    image: "http://www.way2door.com/images/products/coriander.jpg",
    price: 50,
    weight: "250g",
    category: "vegetable",
  },
  {
    name: "Garlic",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Garlic%20(Lehsun)-way2door.jpg",
    price: 15,
    weight: "100g",
    category: "vegetable",
  },
  {
    name: "Pomegranate (Anar)",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Pomegranate%20(Anaar).jpg",
    price: 180,
    weight: "1kg",
    category: "fruit",
  },
  {
    name: "Pineapple",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Pineapple-way2door.jpg",
    price: 85,
    weight: "1 unit",
    category: "fruit",
  },
  {
    name: "Kiwi",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Kiwi%20-%20Imported-w@d.jpg",
    price: 120,
    weight: "3 units",
    category: "fruit",
  },
  {
    name: "Banana",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Robusta%20Banana-way2door.jpg",
    price: 55,
    weight: "6 units",
    category: "fruit",
  },
  {
    name: "Papaya",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Papaya-way2door.jpg",
    price: 70,
    weight: "1 unit",
    category: "fruit",
  },
  {
    name: "Watermelon",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Kiran%20Watermelon.jpg",
    price: 40,
    weight: "1 unit",
    category: "fruit",
  },
  {
    name: "Mosambi",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Nagpur%20Orange%20way@door.jpg",
    price: 52,
    weight: "1kg",
    category: "fruit",
  },
  {
    name: "Dates Crown Premium",
    image:
      "http://www.way2door.com/AllProducts/fruits_and_vegetables/Date%20Crown%20Fard%20Dates-way2door.jpg",
    price: 200,
    weight: "500g",
    category: "dryfruit",
  },
  {
    name: "Eggs",
    image: "http://www.way2door.com/AllProducts/non_veg/non_veg_Eggs.jpg",
    price: 85,
    weight: "12 units",
    category: "nonveg",
  },
  {
    name: "Amul Milk",
    image:
      "https://rukminim1.flixcart.com/image/416/416/jaij3bk0/milk/d/u/c/1-tetrapack-homogenized-amul-original-imafy2q4reda3v5z.jpeg?q=70",
    price: 52,
    weight: "1L",
    category: "dairy",
  },
  {
    name: "Amul Cheese",
    image:
      "https://rukminim1.flixcart.com/image/416/416/l2rwzgw0/cheese/u/b/e/100-pure-milk-cheese-processed-cheese-amul-original-imagefmxfrzqdpug.jpeg?q=70",
    price: 115,
    weight: "200gm",
    category: "dairy",
  },
  {
    name: "French Fries",
    image:
      "https://www.mccainindia.com/assets/upload/product/1514370457_french-fries-detail-img.png",
    price: 200,
    weight: "750gm",
    category: "frozen",
  },
  {
    name: "Smilies",
    image:
      "https://www.jiomart.com/images/product/original/491110949/mccain-smiles-1-25-kg-product-images-o491110949-p590125294-0-202203170955.jpg",
    price: 213,
    weight: "750gm",
    category: "frozen",
  },
];
let matched;
function App() {
  const [Products, setProducts] = useState(products);
  const [cart, setCart] = useState([]);
  let [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let [total, setTotal] = useState(0);

  const updateQuantity = (e) => {
    let ind = e.target.closest(".product").getAttribute("ind");
    let quantity = document.querySelector('p[ind="' + ind + '"]').innerHTML;
    if (e.target.innerHTML == "+") {
      document.querySelector('p[ind="' + ind + '"]').innerHTML++;
    } else if (e.target.innerHTML == "-") {
      if (quantity > 0) {
        document.querySelector('p[ind="' + ind + '"]').innerHTML--;
      }
    }
  };

  const addProduct = (e) => {
    let index = -1;
    let ind = e.target.closest(".product").getAttribute("ind");
    let quantity = document.querySelector('p[ind="' + ind + '"]').innerHTML;
    for (let i = 0; i < cart.length; i++) {
      if (Products[ind].name === cart[i].name) {
        index = i;
      }
    }
    if (document.querySelector('p[ind="' + ind + '"]').innerHTML > 0) {
      document
        .querySelector('.divQuantity[ind="' + ind + '"]')
        .classList.add("visible");
      if (index > -1) {
        document.querySelector('.divQuantity[ind="' + ind + '"]').innerHTML =
          parseInt(
            document.querySelector('.divQuantity[ind="' + ind + '"]').innerHTML
          ) + parseInt(quantity);
        cart[index].quantity =
          parseInt(cart[index].quantity) + parseInt(quantity);
        document.querySelector('p[ind="' + ind + '"]').innerHTML = 0;
      } else {
        document.querySelector('.divQuantity[ind="' + ind + '"]').innerHTML =
          parseInt(
            document.querySelector('.divQuantity[ind="' + ind + '"]').innerHTML
          ) + parseInt(quantity);
        document.querySelector('p[ind="' + ind + '"]').innerHTML = 0;
        cart.push(Products[ind]);
        cart[cart.length - 1].quantity = quantity;
        cart[cart.length - 1].subtotal =
          parseInt(cart[cart.length - 1].quantity) *
          parseInt(cart[cart.length - 1].price);
      }
      setCart([...cart]);
      document.getElementById("cartQuantityPara").classList.add("visible");
      setCartValues();
    }
  };

  const filter = (e) => {
    matched = [];
    let category = e.target.getAttribute("value");
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === category) {
        matched.push(products[i]);
      }
    }
    setProducts([...matched]);
  };

  const setCartValues = () => {
    total = 0;
    for (let i = 0; i < cart.length; i++) {
      cart[i].subtotal = parseInt(cart[i].price) * parseInt(cart[i].quantity);
      total = parseInt(total) + cart[i].subtotal;
    }
    setTotal(total);
    setCart([...cart]);
  };

  const Remove = (e) => {
    let index = e.target.getAttribute("index");
    console.log(cart[index].name)
    for(let i=0;i<Products.length;i++){
      if (Products[i].name === cart[index].name) {
        var ind = i;
      }
    }
    console.log(Products[ind].name)
    document.querySelector('.divQuantity[ind="' + ind + '"]').innerHTML=0;
    document.querySelector('.divQuantity[ind="' + ind + '"]').classList.remove("visible")
    cart.splice(index, 1);
    setCart([...cart]);
    setCartValues();
  };

  return (
    <div className="App">
      <Cart
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        cart={cart}
        total={total}
        Remove={Remove}
      />
      <div id="navBar">
        <img alt="logo" src="http://www.way2door.com/images/way2door-min.png" />
        <p>
          Today's order will be delivered tomorrow. सबसे सस्ता और सबसे अच्छा.
        </p>
        <div id="cartIconDiv">
          <ShoppingCartIcon
            onClick={() => {
              setIsDrawerOpen(true);
            }}
            style={{ fontSize: "50px" }}
          ></ShoppingCartIcon>
          <p id="cartQuantityPara">{cart.length}</p>
        </div>
      </div>
      <div id="body">
        <div id="body-left">
          <div id="store-info">
            <p id="store-name">LUCKNOW VEG EXPRESS</p>
            <div id="store-rating">
              <StarIcon className="starFilled" />
              <StarIcon className="starFilled" />
              <StarIcon className="starFilled" />
              <StarIcon className="starFilled" />
              <StarBorderIcon className="starFilled" />
            </div>
            <div>
              <Button variant="outlined" size="small" className="btnRevInfo">
                Reviews
              </Button>
              <Button size="small" variant="outlined" className="btnRevInfo">
                Contact Info
              </Button>
            </div>
          </div>
          <div id="categories">
            <div onClick={filter} value="fruit" className="divCategory">
              Fresh Fruits
            </div>
            <div onClick={filter} value="vegetable" className="divCategory">
              Fresh Vegetables
            </div>
            <div onClick={filter} value="dryfruit" className="divCategory">
              Dry Fruits
            </div>
            <div onClick={filter} value="nonveg" className="divCategory">
              Fresh NonVeg
            </div>
            <div onClick={filter} value="dairy" className="divCategory">
              Dairy Products
            </div>
            <div onClick={filter} value="frozen" className="divCategory">
              Frozen Products
            </div>
          </div>
        </div>
        <div id="body-right">
          <div id="body-right-head">
            <div id="body-right-head-para">
              <p>Order Timing : </p>
              <p className="green">8:00 am</p>to<p className="green">6:00 pm</p>
              <div id="storeOpen">Store Open</div>
            </div>
            <div>
              <button className="btnHeadblue">My Offers</button>
              <button className="btnHeadblue">Page Like 12</button>
            </div>
          </div>
          <div id="body-right-products">
            {Products.map((item, i) => {
              return (
                <div className="product" ind={i}>
                  <div className="divQuantity" ind={i}>
                    0
                  </div>
                  <img alt={item.name} src={item.image} />
                  <div className="productDetailsOuter">
                    <div className="productDetails">
                      <p>{item.name}</p>
                      <p className="weight">{item.weight}</p>
                      <p>₹{item.price}</p>
                    </div>
                    <div>
                      <div id="divAdd">
                        <button onClick={updateQuantity}>-</button>
                        <p className="itemQuantity" ind={i}>
                          0
                        </p>
                        <button onClick={updateQuantity}>+</button>
                      </div>
                      <button onClick={addProduct} className="btnAdd">
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
