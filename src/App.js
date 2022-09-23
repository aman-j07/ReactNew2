import './App.css';
import logo from './components/logo.png'
import msg from './components/msg.png'
import comp from './components/comp.png'
function App() {
  return (
    <div className="App">
      <div id="navBar"><img src={logo}/><div id="navLinks"><a>Solutions</a><a>Products</a><a>Resources</a><a>Company</a><a id="aLogIn">Get Started</a><a><i class="fa-solid fa-magnifying-glass"/>Search</a></div></div>
      <div id="body"><div id="left"><h2 id="online">Get Started with Apptio Today</h2><p>Talk to an Apptio expert about your specific needs and see a live product demonstration. Discuss current challenges and find the right application for your use case.</p></div><div id="right"><div><input placeholder='First Name'/><input placeholder='Last Name'/></div><div><input placeholder='Work Email'/><input placeholder='Phone'/></div><div><input placeholder='Company'/><select><option>Job Function</option></select></div><select id="inpSecLast"><option>Country</option></select><input id="inpLast" placeholder='How Can We Help?'/><button id="btnStarted">Get Started</button></div><div id="imgDivs"><img src={msg}/><img src={comp}/></div></div>
    </div>
  );
}

export default App;
