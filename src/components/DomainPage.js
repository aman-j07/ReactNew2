import React,{useRef, useState} from "react";
import establishBrand from "./images/establishBrand.png";
import rankHigh from "./images/rankHigh.png";
import stayTop from "./images/stayTop.png";
import NavBar from "./NavBar";

const arrDomains=[".co",".boutique",".com",".shop",".market"]
function DomainPage() {
    let [suggestions,setSuggestions]=useState([])
    const [reserved,setReserved]=useState(["aman.co","aman.shop","shopify.market","cart.co","cart.boutique"])
    const refInput=useRef();

    const showSuggestions=()=>{
        let domain=refInput.current.value;
        suggestions=[];
        for(let i=0;i<arrDomains.length;i++){
            let item=String(domain+arrDomains[i]);
            let found=false;
            for(let j=0;j<reserved.length;j++){
                if(String(item.toLowerCase())===String(reserved[j].toLowerCase())){
                    found=true;
                }
            }
            if(found){
                suggestions.push([item,"Unavailable"])
            }
            else{
                suggestions.push([item,"USD 14.00"])
            }
            
        }
        console.log(suggestions)
        setSuggestions([...suggestions])
    }

  return (
    <><NavBar/>
    <div id="domain">
      <h1>Find the perfect domain name</h1>
      <div className="inpDiv">
        <input ref={refInput} placeholder="Enter your domain name"/>
        <button onClick={showSuggestions} id="btnStartTrial">Search available domains</button>
      </div>
        <table id="suggestionsTable"><tbody>
            {suggestions.map((item,i)=>{
                return(<tr key={i}><td><p>{item[0]}</p><p>{item[1]}</p></td></tr>)
              
            })}
            </tbody>
        </table>
      <div className="imgDiv">
        <img alt="/" src={establishBrand} />
        <img alt="/" src={rankHigh} />
        <img alt="/" src={stayTop} />
      </div>
    </div>
    </>
  );
}

export default DomainPage;
