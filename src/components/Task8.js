import './Task8.css'
import React, { useState } from 'react'
import TodoList from './Todo/TodoList'
import CompletedList from './Todo/CompletedList'


let indexTodo,indexCompleted,indexEdit,idEdit;
const Task8 = () => {
let [newTask,setNewTask]=useState("");
const [arrTodo,setArrTodo]=useState([]);
const [arrCompleted,setArrCompleted]=useState([]);
   let inputRef = React.createRef();
   let btnAddRef = React.createRef();

    const changeHandlerTask = () => {
      if (btnAddRef.current.innerHTML === "Add" && inputRef.current.value!=="") {
        setNewTask(inputRef.current.value)
        arrTodo.push(inputRef.current.value);
        inputRef.current.value = "";
      } else if (btnAddRef.current.innerHTML === "Update"  && inputRef.current.value!=="") {
        if (idEdit === "incomplete-tasks") {
          arrTodo[indexEdit] = inputRef.current.value;
        } else if (idEdit === "completed-tasks") {
          arrCompleted[ indexEdit] =inputRef.current.value;
        }
         inputRef.current.value = "";
         btnAddRef.current.innerHTML ="Add"
      }
      setArrTodo([...arrTodo])
      setArrCompleted([...arrCompleted])
    };


    const clickHandler = (event) => {
       indexTodo = event.target.getAttribute("id");
       arrCompleted.push( arrTodo[ indexTodo]);
       arrTodo.splice( indexTodo, 1);
       setArrTodo([...arrTodo])
      setArrCompleted([...arrCompleted])
    };


    const clickHandlerUncheck = (event) => {
       indexCompleted = event.target.getAttribute("id");
       arrTodo.push( arrCompleted[ indexCompleted]);
       arrCompleted.splice( indexCompleted, 1);
       setArrTodo([...arrTodo])
       setArrCompleted([...arrCompleted])
    };


    const clickHandlerDelete = (event) => {
      let index = 0;
      index = event.target.parentElement.getAttribute("id");
      if (
        event.target.parentElement.parentElement.getAttribute("id") ===
        "incomplete-tasks"
      ) {
         arrTodo.splice(index, 1);
      } else if (
        event.target.parentElement.parentElement.getAttribute("id") ===
        "completed-tasks"
      ) {
         arrCompleted.splice(index, 1);
      }
      setArrTodo([...arrTodo])
      setArrCompleted([...arrCompleted])
      console.log(
        "todo=",
         arrTodo,
        "completed=",
         arrCompleted
      );
    };


    const clickHandlerEdit = (event) => {
      var text = "";
      text = event.target.parentElement.textContent;
      text = text.slice(0, -10);
       inputRef.current.value = text;
       inputRef.current.focus();
       btnAddRef.current.innerHTML = "Update";
       indexEdit = event.target.parentElement.getAttribute("id");
       idEdit = event.target.parentElement.parentElement.getAttribute("id");
    };
      return (
        <div id="outerContainer">
            <h2>Task 8</h2>
            <div className="container">
          <h2>TODO LIST</h2>
          <h3>Add Item</h3>
          <p>
            <input id="new-task" ref={ inputRef} type="text" />
            <button
              id="addbtn"
              ref={ btnAddRef}
              onClick={ changeHandlerTask}
            >
              Add
            </button>
          </p>
          <TodoList
            arrTodo={ arrTodo}
            clickHandler={ clickHandler}
            clickHandlerDelete={ clickHandlerDelete}
            clickHandlerEdit={ clickHandlerEdit}
          />
          <CompletedList
            arrCompleted={ arrCompleted}
            clickHandlerUncheck={ clickHandlerUncheck}
            clickHandlerDelete={ clickHandlerDelete}
            clickHandlerEdit={ clickHandlerEdit}
          />
        </div></div>
      );
      }

export default Task8