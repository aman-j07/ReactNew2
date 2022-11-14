import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostsUsingAsyncAwait from "./components/PostsUsingAsyncAwait";
import PostsUsingAxios from "./components/PostsUsingAxios";

function App() {
  return (
    <div id="App">
      <Posts/>
      {/* <PostsUsingAsyncAwait/>
      <PostsUsingAxios/> */}
      <div id='footer'>
      <div id="footerLogoDiv"><select><option>English</option></select></div>
      <ul id="footerLinks"><li>Privacy And Cookies</li><li>Terms And Condition</li><li>Sale Terms And Condition</li><li>Delivery Policy</li><li>Return/Refund Policy</li><li>Fee/Payment Policy</li></ul>
      </div>
    </div>
  );
}

export default App;
