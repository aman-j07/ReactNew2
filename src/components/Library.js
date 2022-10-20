import NoteIcon from "@mui/icons-material/Note";
import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useState } from "react";
import Dialog from "./Dialog";
import DialogEdit from "./DialogEdit";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


let indexEdit;
const Library = () => {
  const [notes, setNotes] = useState([
    ["Grocery List", "1. Potato 2. Tomato 3. Pumpkin 4. Onion",],
    [
      "lorem ipsum",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident odio fuga in quisquam dicta fugiat laborum quasi sunt maxime minima dolore neque ducimus omnis ratione ullam odit! Amet, modi!",
    ],
    [
      "lorm ipsum",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident odio fuga in quisquam dicta fugiat laborum quasi sunt maxime minima dolore neque ducimus omnis ratione ullam odit! Amet, modi!",
    ],
    [
      "lorem ipsum",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, provident odio fuga in quisquam dicta fugiat laborum quasi sunt maxime minima dolore neque ducimus omnis ratione ullam odit! Amet, modi!",
    ],
  ]);
  let [note, setNote] = useState([]);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleClickOpen = (e) => {
    setNote(notes[parseInt(e.target.getAttribute("ind"))]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      let searchItem=String(e.target.value).toLowerCase();
      let result=[];
      for(let i=0;i<notes.length;i++){
        notes[i].splice(2,1)
        if((notes[i][0].toLowerCase()).includes(searchItem)||(notes[i][1].toLowerCase()).includes(searchItem)){
        result.push(i)
        notes[i].push("red")
        }
      }
      setNotes([...notes])
    }
  };

  const addNote = () => {
    let obj = [];
    obj.push(document.getElementById("inpTitle").value);
    obj.push(document.getElementById("inpDescription").value);
    console.log(obj);
    document.getElementById("formBlog").reset();
    setNotes([...notes, obj]);
    console.log(notes);
    document.getElementById("newBlog").classList.add("hidden");
    alert("Note added successfully");
  };

const editDeleteNote=(e)=>{
  indexEdit=e.target.closest("#weatherDeatils").getAttribute("ind")
  if(e.target.closest("svg").getAttribute("todo")==="edit"){
    setNote(notes[indexEdit]);
    setOpenEdit(true);
  }
  else if(e.target.closest("svg").getAttribute("todo")==="delete"){
    let temp=notes;
    temp.splice(indexEdit,1)
    setNotes([...temp])
  }
  console.log(notes)
}

const changeHandlerNote=(e)=>{
  note[1]=e.target.value;
  setNote([...note])
}

const changeHandlerNoteTitle=(e)=>{
  note[0]=e.target.value;
  setNote([...note])
}

const setEdit=()=>{
  console.log(indexEdit)
  notes[indexEdit]=note;
  console.log(notes)
  setNotes([...notes])
  handleCloseEdit()
}

  return (
    <>
      <div id="navBar">
        <div id="divLogo">
          <NoteIcon /> <pre>Notes</pre>
        </div>
        <div id="searchOuter"><div id="searchBar">
              <SearchIcon />
              <input
                onKeyDown={enterSearch}
                placeholder="Search for your favourite note"
              />
            </div></div>
        <NoteAddIcon
          onClick={() => {
            document.getElementById("newBlog").classList.remove("hidden");
          }}
          style={{ marginRight: "5%", fontSize: "30px", cursor: "grab" }}
        />
      </div>
      <div id="newBlog" className="hidden">
        <div id="newBlogHead">
          <h2>Add New Note</h2>
          <button id="btnX"
            onClick={() => {
              document.getElementById("newBlog").classList.add("hidden");
            }}
          >
            X
          </button>
        </div>
        <form id="formBlog">
          <input id="inpTitle" placeholder="Enter Title" type="text" />
          <textarea id="inpDescription" placeholder="Enter Note" type="text" />
        </form>
        <button id="btnAddNote" onClick={addNote}>
          Add
        </button>
      </div>

      <div id="detailsOuter">
        <div id="detailsInner">
          {notes.map((item, i) => {
            return (
              <div
                key={i}
                ind={i}
                id="weatherDeatils"
                className={item[2]}
              >
                <div id="editDeleteDiv"><EditIcon todo="edit" onClick={editDeleteNote}/><DeleteIcon todo="delete" onClick={editDeleteNote}/></div>
                <p ind={i} onClick={handleClickOpen} id="cityName">
                  {item[0]}
                </p>
                <hr />
                <p ind={i} onClick={handleClickOpen} id="cityText">
                  {item[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Dialog open={open} note={note} handleClose={handleClose} />
      <DialogEdit open={openEdit} note={note} handleClose={handleCloseEdit} changeHandlerNoteTitle={changeHandlerNoteTitle} changeHandlerNote={changeHandlerNote} setEdit={setEdit} />
    </>
  );
};

export default Library;
