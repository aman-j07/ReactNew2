import React, { useState } from 'react'
import { data } from './data'

const WorldCoronaMeter = () => {
    const [Data,setData]=useState(data)

    const SortCategory=(e,type)=>{
        const sorterNumAscending = (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? 1 : -1;
        const sorterNumDescending = (sortBy) => (a, b) => a[sortBy] > b[sortBy] ? -1 : 1;
        const sorterStrAscending = (sortBy) => (a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
        const sorterStrDescending = (sortBy) => (a, b) => a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? -1 : 1;
        let temp=data;
        document.querySelectorAll("th").forEach(item=>{item.children[0].innerText=""});
        let category=e.target.getAttribute("category");
        if(type==="string"){
            if(e.target.getAttribute("sort")==="Ascending"){
            temp.sort(sorterStrDescending(category))
            e.target.setAttribute("sort","Descending")
            e.target.children[0].innerText="↑"
        }
        else if(e.target.getAttribute("sort")==="Descending" || e.target.getAttribute("sort")===null){
            temp.sort(sorterStrAscending(category))
            e.target.setAttribute("sort","Ascending")
            e.target.children[0].innerText="↓"
        }    
        }
        else if(type==="integer"){
            if(e.target.getAttribute("sort")==="Ascending"){
                temp.sort(sorterNumDescending(category))
                e.target.setAttribute("sort","Descending")
                e.target.children[0].innerText="↑"
            }
            else if(e.target.getAttribute("sort")==="Descending" || e.target.getAttribute("sort")===null){
                temp.sort(sorterNumAscending(category))
                e.target.setAttribute("sort","Ascending")
                e.target.children[0].innerText="↓"
            } 
        }
        setData([...temp])
    }
  return (
    <div>
        <h1>World Corona Meter</h1>
        <table>
            <tbody>
            <tr><th category="CountryRegion" onClick={(e)=>SortCategory(e,"string")}>Country/Region<p></p></th><th category="Continent" onClick={(e)=>SortCategory(e,"string")}>Continent<p></p></th><th category="Population" onClick={(e)=>SortCategory(e,"integer")}>Population<p></p></th><th category="TotalCases" onClick={(e)=>SortCategory(e,"integer")}>Total Cases<p></p></th><th category="NewCases" onClick={(e)=>SortCategory(e,"integer")}>New Cases<p></p></th><th category="TotalDeaths" onClick={(e)=>SortCategory(e,"integer")}>Total Deaths<p></p></th><th category="NewDeaths" onClick={(e)=>SortCategory(e,"integer")}>New Deaths<p></p></th><th category="TotalRecovered" onClick={(e)=>SortCategory(e,"integer")}>Total Recovered<p></p></th><th category="NewRecovered" onClick={(e)=>SortCategory(e,"integer")}>New Recovered<p></p></th><th category="ActiveCases" onClick={(e)=>SortCategory(e,"integer")}>Active Cases<p></p></th><th category="SeriousCritical" onClick={(e)=>SortCategory(e,"integer")}>Serious/Critical<p></p></th><th category="TotCasesPer1Mpop" onClick={(e)=>SortCategory(e,"integer")}>Total Cases/1M population<p></p></th><th category="DeathsPer1Mpop" onClick={(e)=>SortCategory(e,"integer")}>Deaths/1M population<p></p></th><th category="TotalTests" onClick={(e)=>SortCategory(e,"integer")}>Total Tests<p></p></th><th category="TestsPer1Mpop" onClick={(e)=>SortCategory(e,"integer")}>Tests/1M population<p></p></th><th category="WHORegion" onClick={(e)=>SortCategory(e,"string")}>WHO Region<p></p></th></tr>
                {Data.map(item=>{
                    return(
                    <tr key={item.CountryRegion}><td>{item.CountryRegion}</td><td>{item.Continent}</td><td>{item.Population}</td><td>{item.TotalCases}</td><td>{item.NewCases}</td><td>{item.TotalDeaths}</td><td>{item.NewDeaths}</td><td>{item.TotalRecovered}</td><td>{item.NewRecovered}</td><td>{item.ActiveCases}</td><td>{item.SeriousCritical}</td><td>{item.TotCasesPer1Mpop}</td><td>{item.DeathsPer1Mpop}</td><td>{item.TotalTests}</td><td>{item.TestsPer1Mpop}</td><td>{item.WHORegion}</td></tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}

export default WorldCoronaMeter