import NoteIcon from "@mui/icons-material/Note";
import { useEffect, useRef } from "react";
import { useState } from "react";
import useFetch from "./useFetch"

const Library = () => {
  let refStart=useRef(0)
  const [start,setStart]=useState(0)
  const [partPosts,setPartPosts]=useState([])
  useFetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`,partPosts,setPartPosts)
  
  const handleScroll=()=>{
    let scrollable=document.documentElement.scrollHeight-window.innerHeight;
    let scrolled=window.scrollY; 
    if(scrollable-scrolled===0){
     if(refStart.current<95){
      refStart.current=refStart.current+5;
      setStart(refStart.current)
    }
    else{
      window.removeEventListener("scroll",handleScroll)
    }
  }
  }
  useEffect(()=>{
  window.addEventListener("scroll",handleScroll)
  },[])

  

  return (
    <>
      <div id="navBar">
        <div id="divLogo">
          <NoteIcon /> <pre>Posts</pre>
        </div>
      </div>
      <div id="detailsOuter">
        <div id="detailsInner">
          {partPosts && partPosts.map(item => {
            return (
              <div  key={item.id} id="postDetails">
                <div id="postIdDiv">{item.id}</div>
                <p id="postTitle">
                  {item.title}
                </p>
                <hr />
                <p id="postBody">
                  {item.body}
                </p>
              </div>
            );
          })}
          <div id="divLoading">
          <img alt="Loading Gif" src="4.gif"/>
          </div>
          {partPosts.length<100 ? "":<div id="postDetails" style={{color: "green",textAlign: "center"}}>No new posts</div>}
        </div>
      </div>
 </>
  );
};

export default Library;
