import React from 'react';
import { BrowserRouter , Route, Routes } from "react-router-dom";

import AdminDashboard from '../Dashboard_Admin/AdminDashboard';
import Login from './Login'
import SignUp from './SignUp'



const Routex = () => {
  return (
    <>
   <BrowserRouter>
        <div className="App">
     
          <Routes>
            <Route path="/" element={<Login/>} > </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            {/* <Route path="/AdminDashboard" element={<AdminDashboard/>}/> */}
            {/* <Route path="/Dashboard" element={<Dashboard/>}/> */}
          </Routes>
         
        </div>
      </BrowserRouter>
      
    </>
  );
};

export default Routex;
