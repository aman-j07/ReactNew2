import React, { useContext } from 'react'
import { CurrencyContext } from '../App'

const CurrencyConvertorLevel2 = () => {
    const arrRates=useContext(CurrencyContext);
    return (
    <div id="divCurrency"><div><label>From</label><select id="selFrom">{arrRates.map((item,i)=>{return <option key={i}>{item}</option>})}</select></div><i className="fa-solid fa-arrow-right-arrow-left"></i><div><label>To</label><select id="selTo">{arrRates.map((item,i)=>{return <option key={i}>{item}</option>})}</select></div></div>
  )
}

export default CurrencyConvertorLevel2