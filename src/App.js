import "./App.css";
import Library from "./components/Library";
import NewspaperIcon from '@mui/icons-material/Newspaper';

function App() {
  return (
    <div id="App">
      <Library/>
      <div id='footer'>
      <div id="footerLogoDiv"><NewspaperIcon/><select><option>English</option></select></div>
      <ul id="footerLinks"><li>Privacy And Cookies</li><li>Terms And Condition</li><li>Sale Terms And Condition</li><li>Delivery Policy</li><li>Return/Refund Policy</li><li>Fee/Payment Policy</li></ul>
      </div>
    </div>
  );
}

export default App;
