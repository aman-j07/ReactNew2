import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Posts = () => {
  const [partPosts, setPartPosts] = useState([]);

  const fetchPost=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then(res=>res.json())
    .then(data=>setPartPosts(data));
    document.getElementById("divLoading").hidden = true;
  };

  const addPost=(event)=>{
    event.preventDefault();
    const Fdata = new FormData(event.target);
    const formData = Object.assign(...Array.from(Fdata, ([name, value]) => ({[name]: value})));  //to make an object from the form input values 
     fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=UTF-8',},
      body: JSON.stringify(formData),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
}

  const deletePost=(i)=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
      method: "DELETE",
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
};

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      <div id="navBar">
        <div id="divLogo"> <pre>Posts</pre>
        </div>
      </div>
      <div id="detailsOuter">
        <div id="detailsInner">
          {partPosts &&
            partPosts.map((item) => {
              return (
                <div key={item.id} id="postDetails">
                  <button className="btnDel postIdDiv" onClick={()=>deletePost(item.id)}>Delete</button>
                  <p id="postTitle">{item.title}</p>
                  <hr />
                  <p id="postBody">{item.body}</p>
                </div>
              );
            })}
          <div id="divLoading">
            <img alt="Loading Gif" src="4.gif" />
          </div>
          <form id="formAddPost" onSubmit={addPost}>
            <div><h3>Add a Post</h3></div>
            <div><label>Title</label><input name="title"/></div>
            <div><label>Body</label><textarea name="body"/></div>
            <div><label>User Id</label><input  type="number" name="userId"/></div>
          <button id="btnAdd" type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Posts;
