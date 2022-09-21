import './App.css';
import logo from './components/logoscience.png'
import study from './components/study.png'
function App() {
  return (
    <div className="App">
      <div id="navBar"><img src={logo}/><div id="navLinks"><a>HOME</a><a>ABOUT US</a><a>SERVICE</a><a>CONTACT</a><a id="aLogIn">LOG IN</a></div></div>
      <div id="body"><div id="left"><h2 id="online">ONLINE</h2><h2 id="education">EDUCATION</h2><p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temprr in- cididunt ut labore et dolore gna aliqua.</p><button>Learn More</button></div><div id="right"><img src={study}/></div></div>
    </div>
  );
}

export default App;
