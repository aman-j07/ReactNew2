import { useState } from "react";
import "./App.css";
const arrCategories=[[],[],[],[]]
const arrIncomes=[];const error={income:"",expense:""}
let idEdit=0;let indexEdit=0;let indexEditIncome=0;
let numbers={totIncome:0,expense:0,balance:0,totGrocery:0,totVeggies:0,totTravel:0,totMisc:0}
function App() {
  const[Numbers,setNumbers]=useState(numbers)
  const[Categories,setCategories]=useState(arrCategories)
  const[Incomes,setIncomes]=useState(arrIncomes)
  const[btn,setBtn]=useState("Add")
  const[btnIncome,setBtnIncome]=useState("Add")
  const[Error,setError]=useState(error)
  
  const addIncome=()=>{ 
    let obj={text:"",amt:0};
    obj.text=document.getElementById("IncomeText").value
    obj.amt=document.getElementById("IncomeAmount").value
    console.log(obj)
    if(obj.amt!=""&&obj.text!=""&&obj.amt!=0){
      error.income="";
      if(btnIncome=="Add"){
          arrIncomes.push(obj)
        }
      else{
          arrIncomes[indexEditIncome]=obj   
          setBtnIncome("Add")
       }
      calNumbers();
      setIncomes([...arrIncomes])
      document.getElementById("IncomeText").value="";
      document.getElementById("IncomeAmount").value="";
    }
    else{
      error.income="Text and amount cannot be empty or less than 0"
    }
    setError({...error})
  }

  const addExpense=()=>{
    let obj={text:"",amt:0};
    obj.text=document.getElementById("expenseText").value
    obj.amt=document.getElementById("expenseAmount").value
    let category=document.getElementById("selCategory").value
    if(category>0 &&obj.text!=""&&obj.amt!=""&&obj.amt!=0){
      error.expense="";
      if(btn==="Add"){
        arrCategories[category-1].push(obj)
    }
    else{
      if(idEdit==category){
        arrCategories[idEdit-1][indexEdit]=obj;
        setCategories([...arrCategories])
      }
      else{
        category=parseInt(category)
        indexEdit=parseInt(indexEdit)
        console.log(category,indexEdit)
        console.log(arrCategories[category])
        arrCategories[category-1].push(obj);
        arrCategories[idEdit-1].splice(indexEdit,1)
      }
      setBtn("Add")
    } 
    document.getElementById("expenseAmount").value=""
    document.getElementById("expenseText").value=""
    document.getElementById("selCategory").selectedIndex=0
    calNumbers();
    setCategories([...arrCategories])
    setNumbers({...numbers})
    }
    else{
      error.expense="Text and amount cannot be empty or less than 0 and also select a category."
    }
    setError({...error})
  }

  const clickDeleteExpense=(event)=>{
    let id="",key=0;
    id=event.target.parentNode.parentNode.getAttribute("id")
    key=event.target.parentNode.getAttribute("id")
    console.log(id,key)
    arrCategories[id-1].splice(key,1)
    calNumbers();
    setCategories([...arrCategories])
  }

  const clickEditExpense=(event)=>{
    let id="",key=0;setBtn("Update");idEdit=0;indexEdit=0
    id=event.target.parentNode.parentNode.getAttribute("id")
    key=event.target.parentNode.getAttribute("id")
    idEdit=id;
    indexEdit=key;
    console.log(idEdit,indexEdit)
      document.getElementById("expenseAmount").value=arrCategories[id-1][key].amt;
      document.getElementById("expenseText").value=arrCategories[id-1][key].text;
      document.getElementById("selCategory").selectedIndex=id;
  }

  const clickDeleteIncome=(event)=>{
    let key=event.target.parentNode.getAttribute("id")
    arrIncomes.splice(key,1);
    setIncomes([...arrIncomes])
    calNumbers();
  }
  const clickEditIncome=(event)=>{
    indexEditIncome=0;setBtnIncome("Update")
    let key=event.target.parentNode.getAttribute("id")
    indexEditIncome=key;
    document.getElementById("IncomeAmount").value=arrIncomes[key].amt;
    document.getElementById("IncomeText").value=arrIncomes[key].text;
  }

  const calNumbers=()=>{
    numbers.expense=numbers.totGrocery=numbers.totVeggies=numbers.totTravel=numbers.totMisc=numbers.totIncome=0;

    for(let i=0;i<arrCategories[0].length;i++){
      numbers.totGrocery=parseFloat(parseFloat(numbers.totGrocery)+parseFloat(arrCategories[0][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[1].length;i++){
      numbers.totVeggies=parseFloat(parseFloat(numbers.totVeggies)+parseFloat(arrCategories[1][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[2].length;i++){
      numbers.totTravel=parseFloat(parseFloat(numbers.totTravel)+parseFloat(arrCategories[2][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrCategories[3].length;i++){
      numbers.totMisc=parseFloat(parseFloat(numbers.totMisc)+parseFloat(arrCategories[3][i].amt)).toFixed(2);
    }
    for(let i=0;i<arrIncomes.length;i++){
      numbers.totIncome=parseFloat(parseFloat(numbers.totIncome)+parseFloat(arrIncomes[i].amt)).toFixed(2);
    }
    numbers.expense=parseFloat(parseFloat(numbers.totGrocery)+parseFloat(numbers.totVeggies)+parseFloat(numbers.totTravel)+parseFloat(numbers.totMisc));
    numbers.balance=parseFloat(parseFloat(numbers.totIncome)-parseFloat(numbers.expense));
    setNumbers({...numbers})  
  } 

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">{Numbers.balance}</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">{Numbers.totIncome}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">{Numbers.expense}</p>
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
            <div className="header"><h3>Incomes</h3><p>Total- {numbers.totIncome}/-</p></div>
            <ul id="1" className="list">
              {arrIncomes.map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditIncome}>Edit</button><button className="btnDelete" onClick={clickDeleteIncome}>Delete</button></div></li>})}
            </ul>
          </div>
        <h3>Expenses</h3>
        <div className="Categories">
        <div className="header"><h5>Grocery</h5><p>Total- {numbers.totGrocery}/-</p></div>
        <ul id="1" className="list">
          {Categories[0].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Veggies</h5><p>Total- {numbers.totVeggies}/-</p></div>
        <ul id="2" className="list">
          {Categories[1].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Travelling</h5><p>Total- {numbers.totTravel}/-</p></div>
        <ul id="3" className="list">
        {Categories[2].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
        <div className="Categories">
        <div className="header"><h5>Miscellaneous</h5><p>Total- {numbers.totMisc}/-</p></div>
        <ul id="4" className="list">
        {Categories[3].map((item,i)=>{return <li className="minus" id={i} key={i}>{item.text}<span>{item.amt}</span><div className="btns"><button className="btnEdit" onClick={clickEditExpense}>Edit</button><button className="btnDelete" onClick={clickDeleteExpense}>Delete</button></div></li>})}
        </ul>
        </div>
      </div>
    </>
  );
}

export default App;
