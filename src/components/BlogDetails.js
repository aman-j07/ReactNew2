import React from 'react'

const BlogDetails = (props) => {
  return (<>
    
    <div id={props.id}>
    <button onClick={props.closeBlog} id="btnClose">Close</button>
        <h2>{props.obj.head}</h2>
        <p>{props.obj.description}</p>
    </div></>
  )
}

export default BlogDetails