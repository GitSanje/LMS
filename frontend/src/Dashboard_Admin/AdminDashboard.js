import React, { useState, useEffect ,useRef,usewindowSize} from "react";
import "./Dash.css";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import AddBook from "../Book/Addbook";
import Dashboard from "./Dashboard";
import Booklist from "../Book/Booklist";
import Addcategory from "../Category/Addcategory";
import CategoryList from "../Category/CategoryList";
import Addmember from "../Members/Addmember";
import MemberList from "../Members/MemberList";
import EmailForm from "../Message/EmailForm";
import IssueABook from "../IssueBook/IssueAbook";
import IssueBooks from "../IssueBook/IssueBooks";
import NotReturnedBooks from "../IssueBook/NotReturnedBooks";
import ViewRequestedbook from "../Book/ViewRequestedbook";
import Profile from "../Profile/Profile";

import {
  faHouseChimney,
  faBook,
  faUsers,
  faRetweet,
  faTags,
  faMessage,
  faUser,
  faHandHolding,
  faPlus,
  faMinus,
  faBars,
  faWalking,
  faBell,
  faCircle,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdb-react-ui-kit";
import { FaBars } from "react-icons/fa";

const AdminDashboard = () => {
  const ToggleNav = (initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = () => setIsOpen(!isOpen);
    return [isOpen, toggle];
  };

  const [showBooks, toggleBooks] = ToggleNav(false);
  const [showCategories, toggleCategories] = ToggleNav(false);
  const [showMembers, toggleMembers] = ToggleNav(false);
  const [showIssuebooks, toggleIssuebooks] = ToggleNav(false);

  const [showNavbar, setShowNavbar] = useState(true);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  
  const [activeComponent, setActiveComponent] = useState("dashboard"); // set the default component to dashbar
  // function to handle the navbar click and update the active component
  const handleNavbarClick = (componentName) => {
    setActiveComponent(componentName);
  };

  // function to render the active component based on the state variable
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;

      case "addbook":
        return <AddBook />;
      case "booklist":
        return <Booklist />;
      case "addcategory":
        return <Addcategory />;
      case "categorylist":
        return <CategoryList />;
      case "addmember":
        return <Addmember />;
      case "memberlist":
        return <MemberList />;
      case "emailform":
        return <EmailForm />;
      case "issueAbook":
        return <IssueABook />;
      case "issuebooks":
        return <IssueBooks />;
      case "notReturnedBooks":
        return <NotReturnedBooks />;
      case "viewRequestedbooks":
        return <ViewRequestedbook />;
      case "profile":
        return <Profile />;

      default:
        return <Dashboard />;
    }
  };


  return (
    <>
      <MDBContainer fluid>
    
          <MDBRow>
           

            <MDBCol md="3" 
             className='Dashbar'
          
            >
             

                <MDBCardTitle  className="title">
                  <span>
                    <MDBCardImage
                      src="https://miro.medium.com/v2/resize:fit:1240/format:webp/1*jDtG0HHgr5GPguRG3nWkrA.png"
                      alt="login Image"
                      className="rounded-1 logo"
                    />
                  </span>
                  <span className="logo_name"> LIBRASYS</span>
                </MDBCardTitle>

                <MDBNavbar 
                  className={`d-flex flex-column nav-bar my-2 ${showNavbar ? 'visible' : ''}`}
                >
   
   


                  <MDBNavbarItem  onClick={() => handleNavbarClick("dashboard")}>
                   
                      <div className="icon_Dash nav-bar-item ">
                        <FontAwesomeIcon
                          icon={faHouseChimney}
                          className="icon "
                        />
                        <span className="Name_item">Dashboard</span>
                      </div>
                 
                  </MDBNavbarItem>

                  <MDBNavbarItem>
                    
                      <div className="icon_Dash nav-bar-item"onClick={toggleBooks}>
                        <FontAwesomeIcon icon={faBook} className="icon" />
                        <span className="Name_item">Books</span>
                        <span className="P_M_Icon ">
                          {showBooks ? (
                            <FontAwesomeIcon icon={faMinus} size="sm" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} size="sm" />
                          )}
                        </span>
                      </div>
                  
                    {showBooks && (
                      <div className="drop_down">
                        <div
                       
                            to="/AddBook"
                            onClick={() => handleNavbarClick("addbook")}
                            className="d1 mb-3">
                    
                            Add New book
                         
                         
                        </div>
                        <div
                          
                            to="/bookList"
                            className="d1"
                            onClick={() => handleNavbarClick("booklist")}
                          >
                            Book List
                        
                        </div>
                      </div>
                    )}
                  </MDBNavbarItem>
                  <MDBNavbarItem className="d-flex flex-row " onClick={toggleCategories}>
                      <div className="icon_Dash nav-bar-item">
                        <FontAwesomeIcon icon={faTags} className="icon" />
                        <span className="Name_item">Categories</span>
                        <span className="P_M_Icon">
                          {showCategories ? (
                            <FontAwesomeIcon icon={faMinus} size="sm" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} size="sm" />
                          )}
                        </span>
                      </div>
                    {showCategories && (
                      <div className="drop_down">
                        <div
                            to=" Add New Category"
                            className="d1 mb-3"
                            onClick={() => handleNavbarClick("addcategory")}
                          >
                            Add New Category
                    
                        </div>
                        <div
                            to=" Category List"
                            className="d1"
                            onClick={() => handleNavbarClick("categorylist")}
                          >
                            Category List
                       
                        </div>
                      </div>
                    )}
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink to="#!" onClick={toggleMembers}>
                      <div className="icon_Dash nav-bar-item">
                        <FontAwesomeIcon icon={faUsers} className="icon" />
                        <span className="Name_item">Members</span>

                        <span className="P_M_Icon">
                          {showMembers ? (
                            <FontAwesomeIcon icon={faMinus} size="sm" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} size="sm" />
                          )}
                        </span>
                      </div>
                    </MDBNavbarLink>
                    {showMembers && (
                      <div className="drop_down">
                        <div className="d1 mb-3" onClick={() => handleNavbarClick("addmember")}>                            
                            Add New Member
                        </div>
                        <div className="d1" onClick={() => handleNavbarClick("memberlist")}>
                            Member List
                        </div>
                      </div>
                    )}
                  </MDBNavbarItem>
                  <MDBNavbarItem onClick={() => handleNavbarClick("emailform")}>
                      <div className="icon_Dash nav-bar-item">
                        <FontAwesomeIcon icon={faMessage} className="icon" />
                        <span className="Name_item">Messages</span>
                      </div>
                  </MDBNavbarItem>
                  <MDBNavbarItem onClick={toggleIssuebooks}>
                      <div className="icon_Dash  nav-bar-item ">
                        <FontAwesomeIcon icon={faRetweet} className="icon" />

                        <span className="Name_item">Book Issue</span>
                        <span className="P_M_Icon">
                          {showIssuebooks ? (
                            <FontAwesomeIcon icon={faMinus} size="sm" />
                          ) : (
                            <FontAwesomeIcon icon={faPlus} size="sm" />
                          )}
                        </span>
                      </div>

                    {showIssuebooks && (
                      <div className="drop_down">
                        <div className="d1 mb-2" onClick={() => handleNavbarClick("issueAbook")}>
                           Issue A book
                        </div>
                        <div className="d1 mb-2"   onClick={() => handleNavbarClick("issuebooks")}>
                            Issue books
                        </div>
                       <div className="d1" onClick={() => handleNavbarClick("notReturnedBooks")}  >
                            Not-Returned Books
                        </div>
                        
                      </div>
                    )}
                  </MDBNavbarItem>

                  <MDBNavbarItem onClick={() => handleNavbarClick("viewRequestedbooks")}>
                      <div className="icon_Dash  nav-bar-item">
                        <FontAwesomeIcon
                          icon={faHandHolding}
                          className="icon"
                        />
                        <span className="Name_item">View Requested Books</span>
                      </div>
                  </MDBNavbarItem>

                  <MDBNavbarItem onClick={() => handleNavbarClick("profile")}>
                      <div className="icon_Dash  nav-bar-item">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <span className="Name_item">Profile</span>
                      </div>
                  </MDBNavbarItem>
                  
                </MDBNavbar>

            </MDBCol>

            <MDBCol md="9"
            className='rounded  Dash_body  '
             
            >
            <div className="d-flex flex-row bar ">
            
              <div className="bar_icon">
            
 
               <button className="btn" onClick={toggleNavbar}>
                   <FontAwesomeIcon icon={faBars} ></FontAwesomeIcon>
                   </button>
              </div>
              <div className="l_bar"></div>


              <div className="Admin ">
                <FontAwesomeIcon icon={faWalking}></FontAwesomeIcon>
                <span className="ad_name ">admin </span>
                <span className="notif">
                  <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="circle"
                  ></FontAwesomeIcon>
                  <span className="Num"> 1</span>
                </span>
              </div>
              <div className="admin_name">Admin Name</div>

              <div className="circle_user">
                <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
              </div>
            </div>
              {renderActiveComponent()}
              </MDBCol>
           

           
          </MDBRow>
     
      </MDBContainer>
    </>
  );
};

export default AdminDashboard;