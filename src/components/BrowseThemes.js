import React from "react";
import ThemesNavBar from "./ThemesNavBar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const products = [
  { name: "Reformation", img: "Reformation.png", price: 300,categories:["EU translations (EN, FR, IT, DE, ES)","Store locator","Countdown timer","Color swatches","Quick view"],text:"Feature-packed, high-performant Shopify theme",creator:"Fuel Themes" },
  { name: "Capital", img: "Capital.png", price: 350,categories:["Color swatches","Stock counter","In-menu promos","Mega menu","Breadcrumbs"],text:"Showcase large inventories with style and precision",creator:"Eight Themes"},
  { name: "Dawn", img: "Dawn.png", price: 0,categories:["Quick view","Mega menu","Sticky header"],text:"A minimalist theme that lets product images take center stage.",creator:"Shopify"},
  { name: "Banjo", img: "Banjo.png", price: 320,categories:["EU translations (EN, FR, IT, DE, ES)","Color swatches","Quick view","Stock counter","In-menu promos"],text:"Flexible, easy to use and focused on an elegant user experience.",creator:"Theme Goal"   },
  { name: "Erickson", img: "Erickson.png", price: 320,categories:["Countdown timer","Stock counter","Mega menu","Sticky header","Back-to-top button"],text:"A flexible & modern theme designed to accelerate your online business",creator:"Whiley Mai"   },
  { name: "Reformation", img: "Reformation.png", price: 300,categories:["EU translations (EN, FR, IT, DE, ES)","Store locator","Countdown timer","Color swatches","Quick view"],text:"Feature-packed, high-performant Shopify theme",creator:"Fuel Themes" },
  { name: "Capital", img: "Capital.png", price: 350,categories:["Color swatches","Stock counter","In-menu promos","Mega menu","Breadcrumbs"],text:"Showcase large inventories with style and precision",creator:"Eight Themes"},
  { name: "Dawn", img: "Dawn.png", price: 0,categories:["Quick view","Mega menu","Sticky header"],text:"A minimalist theme that lets product images take center stage.",creator:"Shopify"},
  { name: "Banjo", img: "Banjo.png", price: 320,categories:["EU translations (EN, FR, IT, DE, ES)","Color swatches","Quick view","Stock counter","In-menu promos"],text:"Flexible, easy to use and focused on an elegant user experience.",creator:"Theme Goal"   },
  { name: "Erickson", img: "Erickson.png", price: 320,categories:["Countdown timer","Stock counter","Mega menu","Sticky header","Back-to-top button"],text:"A flexible & modern theme designed to accelerate your online business",creator:"Whiley Mai"   },
];
const BrowseThemes = (props) => {
  const navigate = useNavigate()
  const expandCategory = (e) => {
    if (e.target.closest(".categoryDiv").classList.length === 1) {
      e.target.closest(".categoryDiv").classList.add("heightAuto");
    } else {
      e.target.closest(".categoryDiv").classList.remove("heightAuto");
    }
  };

  const chooseTheme=(e)=>{
    let ind=parseInt(e.target.closest(".productDiv").getAttribute("ind"))
    props.setTheme(products[ind]);
    navigate("/themesDetails");
  }


  return (
    <div id="browseThemes">
      <ThemesNavBar />
      <div id="browseThemesHead">
        <h1>Browse all themes</h1>
      </div>
      <div id="browseThemesBody">
        <div id="browseThemesBodyLeft">
          <div className="categoryDiv">
            <h6 onClick={expandCategory}>
              Price <KeyboardArrowDownIcon />
            </h6>
            <p className="categoryDivItems">Free</p>
            <p className="categoryDivItems">Paid</p>
          </div>
          <div className="categoryDiv">
            <h6 onClick={expandCategory}>
              Industry <KeyboardArrowDownIcon />
            </h6>
            <p className="categoryDivItems">Arts and crafts</p>
            <p className="categoryDivItems">Baby and kids</p>
            <p className="categoryDivItems">Books, music, and video</p>
            <p className="categoryDivItems">Business equipment and supplies</p>
            <p className="categoryDivItems">Clothing</p>
            <p className="categoryDivItems">Electronics</p>
            <p className="categoryDivItems">Food and drink</p>
            <p className="categoryDivItems">Hardware and automotive</p>
            <p className="categoryDivItems">Health and beauty</p>
            <p className="categoryDivItems">Home and decor</p>
            <p className="categoryDivItems">Jewelry and accessories</p>
            <p className="categoryDivItems">Outdoor and garden</p>
            <p className="categoryDivItems">Pet supplies</p>
            <p className="categoryDivItems">Restaurants</p>
            <p className="categoryDivItems">Services</p>
            <p className="categoryDivItems">Sports and recreation</p>
            <p className="categoryDivItems">Toys and games</p>
            <p className="categoryDivItems">Other</p>
          </div>
          <div className="categoryDiv">
            <h6 onClick={expandCategory}>
              Catalog Size <KeyboardArrowDownIcon />
            </h6>
            <p className="categoryDivItems">1-9 products</p>
            <p className="categoryDivItems">10-199 products</p>
            <p className="categoryDivItems">200+ products</p>
          </div>
          <div className="categoryDiv">
            <h6 onClick={expandCategory}>
              Features <KeyboardArrowDownIcon />
            </h6>
            <p className="categoryDivItems">Age verifier</p>
            <p className="categoryDivItems">Back-to-top button</p>
            <p className="categoryDivItems">Before/after image slider</p>
            <p className="categoryDivItems">Breadcrumbs</p>
            <p className="categoryDivItems">Color swatches</p>
            <p className="categoryDivItems">Countdown timer</p>
            <p className="categoryDivItems">
              EU translations (EN, FR, IT, DE, ES)
            </p>
            <p className="categoryDivItems">Event calendar</p>
            <p className="categoryDivItems">In-menu promos</p>
            <p className="categoryDivItems">Infinite scroll</p>
            <p className="categoryDivItems">Mega menu</p>
            <p className="categoryDivItems">Quick view</p>
            <p className="categoryDivItems">Stock counter</p>
            <p className="categoryDivItems">Store locator</p>
            <p className="categoryDivItems">Sticky header</p>
          </div>
        </div>
        <div id="browseThemesBodyRight">
          {products.map((item, i) => {
            return (
              <div onClick={chooseTheme} ind={i} key={i} className="productDiv">
                <img src={item.img} />
                <div className="productDetailsDiv">
                  <div className="productDetailsNamePrice">
                    <p>{item.name}</p>
                    <p>
                      {item.price === 0 ? "Free" : "$ " + item.price + " USD"}
                    </p>
                  </div>
                  <div className="productDetailsCategories">
                    {item.categories.map((category,j)=>{
                      return( <div key={j} className="productDetailsCategory">{category}</div>)
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowseThemes;
