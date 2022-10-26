import { Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import DomainPage from './components/DomainPage';

function App() {

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Body/>}></Route>
    <Route path='/domainPage' element={<DomainPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
