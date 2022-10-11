import "./App.css";
import Weather from "./components/Weather";
import CloudIcon from '@mui/icons-material/Cloud';

function App() {
  return (
    <div id="App">
      <div id="navBar"><CloudIcon/> <pre> WChecker</pre></div>
      <Weather/>
    </div>
  );
}

export default App;
