import "./App.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Library from "./components/Library";

function App() {
  return (
    <div id="App">
      <div id="navBar"><MenuBookIcon/> <pre> Library</pre></div>
      <Library/>
    </div>
  );
}

export default App;
