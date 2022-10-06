import "./App.css";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";

function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <Task1 />
      <hr/>
      <h1>Task 2</h1>
      <Task2 />
      <hr/>
      <Task3/>
      <hr/>
    </div>
  );
}

export default App;
