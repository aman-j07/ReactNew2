import { Route, Routes } from "react-router-dom";
import "./App.css";
import Attendance from "./components/Attendance";
import Blogs from "./components/Blogs";
import Customers from "./components/Customers";
import Employee from "./components/Employee";
import Guides from "./components/Guides";
import Home from "./components/Home";
import HRSoftware from "./components/HRSoftware";
import Leave from "./components/Leave";
import LogIn from "./components/LogIn";
import MobileApp from "./components/MobileApp";
import Navbar from "./components/Navbar";
import Payroll from "./components/Payroll";
import Pricing from "./components/Pricing";
import SignUp from "./components/SignUp";
import Templates from "./components/Templates";

const users=[];
function App() {
  const addUsers=(user)=>{
    users.push(user)
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/hrSoftware" element={<HRSoftware/>}></Route>
        <Route path="/payroll" element={<Payroll/>}></Route>
        <Route path="/leave" element={<Leave/>}></Route>
        <Route path="/attendance" element={<Attendance/>}></Route>
        <Route path="/employee" element={<Employee/>}></Route>
        <Route path="/mobileApp" element={<MobileApp/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/guides" element={<Guides/>}></Route>
        <Route path="/templates" element={<Templates/>}></Route>
        <Route path="/signUp" element={<SignUp addUsers={addUsers}/>}></Route>
        <Route path="/logIn" element={<LogIn users={users}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
