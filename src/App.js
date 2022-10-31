import { Route,Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import DomainPage from './components/DomainPage';
import SignUp from './components/SignUp';
import Themes from './components/Themes';

function App() {

  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Body/>}></Route>
    <Route path='/domainPage' element={<DomainPage/>}></Route>
    <Route path='/themes' element={<Themes/>}></Route>
    <Route path='/signUp' element={<SignUp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
