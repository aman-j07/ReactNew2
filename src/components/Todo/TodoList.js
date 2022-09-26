

const TodoList=(props)=>{
    return (
      <>
        <h3>Todo</h3>
        <ul id="incomplete-tasks">
          { props.arrTodo.map((d,index) =><li id={index}><input type='checkbox' id={index} checked={false} onChange={ props.clickHandler}/><label>{d}</label><button className='edit' onClick={ props.clickHandlerEdit}>Edit</button><button className='delete' onClick={ props.clickHandlerDelete}>Delete</button></li>)}    
        </ul>
      </>
    );
  }

export default TodoList;