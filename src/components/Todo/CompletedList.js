
const CompletedList=(props)=>{
    return (
      <>
        <h3>Completed</h3>
        <ul id="completed-tasks">
        {props.arrCompleted.map((d,index) =><li id={index}><input type='checkbox' id={index} onChange={ props.clickHandlerUncheck} checked/><label>{d}</label><button className='edit' onClick={ props.clickHandlerEdit}>Edit</button><button className='delete' onClick={ props.clickHandlerDelete}>Delete</button></li>)}
        </ul>
      </>
    );
  }


export default CompletedList;
