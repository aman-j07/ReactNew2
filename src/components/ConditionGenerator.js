import React, { useEffect } from "react";
import { useState } from "react";

const condition1Array = ["Title", "Color", "Size", "Category", "Price"];
const relationArray = ["<", "<=", "==", ">=", ">"];
function ConditionGenerator() {
  let [conditions, setConditions] = useState([
    { id: 0, condition1: "Title", relation: "<=", condition2: "Abc" },
  ]);
  const [result, setResult] = useState("");
  const [orAnd,setOrAnd]=useState(false)

  const onChangeHandler = (i, e) => {
    if (e.target.getAttribute("id") === "selCondition1") {
      conditions[i].condition1 = e.target.value;
    } else if (e.target.getAttribute("id") === "relation") {
      conditions[i].relation = e.target.value;
    } else if (e.target.getAttribute("id") === "selCondition2") {
      conditions[i].condition2 = e.target.value;
    }
    setConditions([...conditions]);
  };

  useEffect(() => {
    let condition = "";
    for (let i = 0; i < conditions.length; i++) {
      if(i===conditions.length-1){
        condition +=
          conditions[i].condition1 +
          conditions[i].relation +
          conditions[i].condition2
      }
      else if (orAnd) {
        condition +=
          conditions[i].condition1 +
          conditions[i].relation +
          conditions[i].condition2 +
          " || ";
      } else {
        condition +=
          conditions[i].condition1 +
          conditions[i].relation +
          conditions[i].condition2 +
          " && ";
      }
    }
    setResult(condition);
  }, [conditions,orAnd]);

  const addCondition = () => {
    let obj = {
      id: conditions.length,
      condition1: "Title",
      relation: "<",
      condition2: "",
    };
    conditions.push(obj);
    setConditions([...conditions]);
  };

  const deleteCondition = (i) => {
    conditions.splice(i, 1);
    setConditions([...conditions]);
  };

  return (
    <div id="parent">
      <h3>Condition Generator</h3>
      <div id="divAllAny">
        <label>Products must match:</label>
        <div>
          <label>All</label>
          <input defaultChecked onChange={()=>{setOrAnd(false)}} name="allAny" type="radio" />
        </div>
        <div>
          <label>Any</label>
          <input onChange={()=>{setOrAnd(true)}}name="allAny" type="radio" />
        </div>
      </div>
      <div id="divConditions">
      {conditions.map((item, i) => {
        return (
          <div className="divCondition" key={item.id}>
            <select
              value={item.condition1}
              onChange={(e) => onChangeHandler(i, e)}
              id="selCondition1"
            >
              {condition1Array.map((itemInner, i) => {
                return (
                  <option key={i} value={itemInner}>
                    {itemInner}
                  </option>
                );
              })}
            </select>
            <select
              value={item.relation}
              onChange={(e) => onChangeHandler(i, e)}
              id="relation"
            >
              {relationArray.map((itemInner, i) => {
                return (
                  <option key={i} value={itemInner}>
                    {itemInner}
                  </option>
                );
              })}
            </select>
            <input
              id="selCondition2"
              onChange={(e) => onChangeHandler(i, e)}
              value={item.condition2}
            />
            <button className="btnDelete" onClick={() => deleteCondition(i)}>Delete</button>
          </div>
        );
      })}
      </div>
      <button id="btnAdd" onClick={addCondition}>Add more..</button>
      <p>Condition : {result}</p>
    </div>
  );
}

export default ConditionGenerator;
