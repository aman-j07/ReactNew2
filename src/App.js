import { useState } from "react";
import "./App.css";

let idEdit=0;let indexEdit=0;let indexEditIncome=0;
function App() {
  const[Numbers,setNumbers]=useState({totIncome:0,expense:0,balance:0,totGrocery:0,totVeggies:0,totTravel:0,totMisc:0})
  const[Categories,setCategories]=useState([[],[],[],[]])
  const[Incomes,setIncomes]=useState([])
  const[btn,setBtn]=useState("Add")
  const[btnIncome,setBtnIncome]=useState("Add")
  const[Error,setError]=useState({income:"",expense:""})
  
  const addIncome=()=>{ 
    let obj={text:"",amt:0};
    obj.text=document.getElementById("IncomeText").value
    obj.amt=document.getElementById("IncomeAmount").value
    console.log(obj)
    if(obj.amt!=""&&obj.text!=""&&obj.amt!=0){
      Error.income="";
      if(btnIncome=="Add"){
           Incomes.push(obj)
        }
      else{
           Incomes[indexEditIncome]=obj   
          setBtnIncome("Add")
       }
      calNumbers();
      setIncomes([...Incomes])
      document.getElementById("IncomeText").value="";
      document.getElementById("IncomeAmount").value="";
    }
    else{
      Error.income="Text and amount cannot be empty or less than 0"
    }
    console.log(Incomes)
    setError({...Error})
  }

  const addExpense=()=>{
    let obj={text:"",amt:0};
    obj.text=document.getElementById("expenseText").value
    obj.amt=document.getElementById("expenseAmount").value
    let category=document.getElementById("selCategory").value
    if(category>0 &&obj.text!=""&&obj.amt!=""&&obj.amt!=0){
      Error.expense="";
      if(btn==="Add"){
        Categories[category-1].push(obj)
    }
    else{
      if(idEdit==category){
        Categories[idEdit-1][indexEdit]=obj;
        setCategories([...Categories])
      }
      else{
        category=parseInt(category)
        indexEdit=parseInt(indexEdit)
        console.log(category,indexEdit)
        console.log(Categories[category])
        Categories[category-1].push(obj);
        Categories[idEdit-1].splice(indexEdit,1)
      }
      setBtn("Add")
    } 
    document.getElementById("expenseAmount").value=""
    document.getElementById("expenseText").value=""
    document.getElementById("selCategory").selectedIndex=0
    calNumbers();
    setCategories([...Categories])
    setNumbers({...Numbers})
    }
    else{
      Error.expense="Text and amount cannot be empty or less than 0 and also select a category."
    }
    setError({...Error})
  }

  const clickDeleteExpense=(event)=>{
    let id="",key=0;
    id=event.target.parentNode.parentNode.parentNode.getAttribute("id")
    key=event.target.parentNode.parentNode.getAttribute("id")
    console.log(id,key)
    Categories[id-1].splice(key,1)
    calNumbers();
    setCategories([...Categories])
  }

  const clickEditExpense=(event)=>{
    let id="",key=0;setBtn("Update");idEdit=0;indexEdit=0
    id=parseInt(event.target.parentNode.parentNode.parentNode.getAttribute("id"))
    key=parseInt(event.target.parentNode.parentNode.getAttribute("id"))
    idEdit=id;
    indexEdit=key;
    console.log(idEdit,indexEdit)
      document.getElementById("expenseAmount").value=Categories[id-1][key].amt;
      document.getElementById("expenseText").value=Categories[id-1][key].text;
      document.getElementById("selCategory").selectedIndex=id;
  }

  const clickDeleteIncome=(event)=>{
    let key=event.target.parentNode.getAttribute("id")
     Incomes.splice(key,1);
    setIncomes([...Incomes])
    calNumbers();
  }
  const clickEditIncome=(event)=>{
    indexEditIncome=0;setBtnIncome("Update")
    let key=parseInt(event.target.parentNode.parentNode.getAttribute("id"))
    indexEditIncome=key;
    console.log( Incomes[key])
    document.getElementById("IncomeAmount").value= Incomes[key].amt;
    document.getElementById("IncomeText").value= Incomes[key].text;
  }

  const calNumbers=()=>{
    Numbers.expense=Numbers.totGrocery=Numbers.totVeggies=Numbers.totTravel=Numbers.totMisc=Numbers.totIncome=0;

    for(let i=0;i<Categories[0].length;i++){
      Numbers.totGrocery=parseFloat(parseFloat(Numbers.totGrocery)+parseFloat(Categories[0][i].amt)).toFixed(2);
    }
    for(let i=0;i<Categories[1].length;i++){
      Numbers.totVeggies=parseFloat(parseFloat(Numbers.totVeggies)+parseFloat(Categories[1][i].amt)).toFixed(2);
    }
    for(let i=0;i<Categories[2].length;i++){
      Numbers.totTravel=parseFloat(parseFloat(Numbers.totTravel)+parseFloat(Categories[2][i].amt)).toFixed(2);
    }
    for(let i=0;i<Categories[3].length;i++){
      Numbers.totMisc=parseFloat(parseFloat(Numbers.totMisc)+parseFloat(Categories[3][i].amt)).toFixed(2);
    }
    for(let i=0;i< Incomes.length;i++){
      Numbers.totIncome=parseFloat(parseFloat(Numbers.totIncome)+parseFloat( Incomes[i].amt)).toFixed(2);
    }
    Numbers.expense=parseFloat(parseFloat(Numbers.totGrocery)+parseFloat(Numbers.totVeggies)+parseFloat(Numbers.totTravel)+parseFloat(Numbers.totMisc));
    Numbers.balance=parseFloat(parseFloat(Numbers.totIncome)-parseFloat(Numbers.expense));
    setNumbers({...Numbers})  
  } 

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">₹{Numbers.balance}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">₹{Numbers.totIncome}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">₹{Numbers.expense}</p>
          </div>
        </div>
        <div className="form-control">
          <h3>Add New Income</h3>
          <div id="incomeInp">
            <input type="text" id="IncomeText" placeholder="Enter text..." />
            <input type="number" id="IncomeAmount" placeholder="Enter amount" />
          </div>
          <button onClick={addIncome} className="btn">
          {btnIncome} Income
        </button>
        <p className="paraError">{Error.income}</p>
        </div>
        <div className="form-control">
          <h3>Add New Expense</h3>
          <div id="incomeInp">
            <input type="text" id="expenseText" placeholder="Enter text..." />
            <input type="number" id="expenseAmount" placeholder="Enter amount..." />
          </div>
          <select id="selCategory"><option value="0">----Select Category------</option><option value="1">Grocery</option><option value="2">Veggies</option><option value="3">Travelling</option><option value="4">Miscellaneous</option></select>
          <button onClick={addExpense} className="btn">
          {btn} Expense
        </button>
        <p className="paraError">{Error.expense}</p>
        </div>
        <div id="Income">
            <div className="header"><h3>Incomes</h3><p>Total- ₹{Numbers.totIncome}/-</p></div>
            <ul id="1" className="list">
              {Incomes.map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditIncome}>Edit</button><button className="btnDelete" onClick={clickDeleteIncome}>Delete</button></div></li>})}
            </ul>
          </div>
        <h3>Expenses</h3>
        <div className="Categories">
        <div className="header"><h5>Grocery</h5><p>Total- ₹{Numbers.totGrocery}/-</p></div>
        <ul id="1" className="list">
          {Categories[0].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Veggies</h5><p>Total- ₹{Numbers.totVeggies}/-</p></div>
        <ul id="2" className="list">
          {Categories[1].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Travelling</h5><p>Total- ₹{Numbers.totTravel}/-</p></div>
        <ul id="3" className="list">
        {Categories[2].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Miscellaneous</h5><p>Total- ₹{Numbers.totMisc}/-</p></div>
        <ul id="4" className="list">
        {Categories[3].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
