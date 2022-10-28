import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import AddBusinessName from './components/AddBusinessName';
import ChooseLogo from './components/ChooseLogo';
import ChooseSpace from './components/ChooseSpace';
import ChooseVisualStyle from './components/ChooseVisualStyle';
import LogoPlace from './components/LogoPlace'

function App() {
  const [name,setName]=useState()
  const [slogan,setSlogan]=useState()

  const changeHandlerName=(e)=>{
    setName(e.target.value)
  }
  const changeHandlerSlogan=(e)=>{
    setSlogan(e.target.value)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ChooseSpace/>}></Route>
        <Route path="/chooseVisualStyle" element={<ChooseVisualStyle/>}></Route>
        <Route path="/addBusinessName" element={<AddBusinessName name={name} changeHandlerName={changeHandlerName} slogan={slogan} changeHandlerSlogan={changeHandlerSlogan}/>}></Route>
        <Route path="/logoPlace" element={<LogoPlace/>}></Route>
        <Route path='/chooseLogo' element={<ChooseLogo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
