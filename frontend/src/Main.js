import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueBooks from './IssueBook/IssueBooks';
import NotReturnedBooks from './IssueBook/NotReturnedBooks';
import AdminDashboard from './Dashboard_Admin/AdminDashboard';

const Main = () => {
  return (
    <>
  <Router>
      <div className="App">
        
          {/* Use the Navigate component to redirect to the AdminDashboard */}
  
          <Route exact path="/" component={AdminDashboard} />
          <Route path="/IssueBooks" component={IssueBooks} />
          <Route path="/NotReturnedBooks" component={NotReturnedBooks} />
        
        </div>
        </Router>
      
    </>
  )
}

export default Main
