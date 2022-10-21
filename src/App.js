import './App.css';
import BodyPart1 from './components/BodyPart1';
import BodyPart2 from './components/BodyPart2';
import BodyPart3 from './components/BodyPart3';
import BodyPart4 from './components/BodyPart4';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BodyPart1/>
      <BodyPart2/>
      <BodyPart3/>
      <BodyPart4/>
    </div>
  );
}

export default App;
