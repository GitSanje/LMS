import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from './Dashboard_Admin/AdminDashboard';
import Login from './signup_login/Login'
import Routex from './signup_login/Routex';
import SignUp from './signup_login/SignUp'
import NotReturnedBooks from './IssueBook/NotReturnedBooks';

import UserDashboard from './DashboardUser/UserDashboard';
const App = () => {
  return (
    <>


      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
            <Route path="/UserDashboard" element={<UserDashboard/>}/>
 
          </Routes>
        </div>
      </BrowserRouter>

      
    </>

  );
};

export default App;