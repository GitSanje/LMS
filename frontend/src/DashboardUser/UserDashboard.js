import React, { useState, useEffect ,useRef,usewindowSize} from "react";
import "../Dashboard_Admin/Dash.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './user.css'
import DashUser from './DashUser'
import Borrowbook from "../Book/BorrowedBook";
import EmailForm from "../Message/EmailForm";
import IssueABook from "../IssueBook/IssueAbook";

import FineDetails from "../Fine/FineDetails";
import ViewRequestedbook from "../Book/ViewRequestedbook";
import Profile from "../Profile/Profile";
import Renewals from "../Renew/Renewal";

import {
  faHouseChimney,

 
  faMessage,
  faUser,
  faHandHolding,
  
  faBars,
  faWalking,
  faBell,
  faCircle,
  faCircleUser,
  faDollar,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";

import {
  MDBContainer,
  MDBRow,
  MDBCol,

  MDBCardTitle,

  MDBCardImage,
  MDBNavbar,
  MDBNavbarItem,

} from "mdb-react-ui-kit";


const UserDashboard = () => {
  const ToggleNav = (initialState) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const toggle = () => setIsOpen(!isOpen);
    return [isOpen, toggle];
  };




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
      case "DashUser":
        return <DashUser />;

 
      case "emailform":
        return <EmailForm />;
      case "issueAbook":
        return <IssueABook />;
      case "finedetails":
        return <FineDetails/>;
      case "Borrowbook":
        return <Borrowbook/>;
      case "viewRequestedbooks":
        return <ViewRequestedbook />;
      case "profile":
        return <Profile />;
        case "Renewal":
          return <Renewals />;

      default:
        return <DashUser />;
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
   
   


                  <MDBNavbarItem  onClick={() => handleNavbarClick("DashUser")}>
                   
                      <div className="icon_Dash nav-bar-item ">
                        <FontAwesomeIcon
                          icon={faHouseChimney}
                          className="icon "
                        />
                        <span className="Name_item">Dashboard</span>
                      </div>
                 
                  </MDBNavbarItem>

                  <MDBNavbarItem onClick={() => handleNavbarClick("Borrowbook")}>
                      <div className="icon_Dash  nav-bar-item">
                        <FontAwesomeIcon
                          icon={faHandHolding}
                          className="icon"
                        />
                        <span className="Name_item">Borrow books</span>
                      </div>
                  </MDBNavbarItem>

                  <MDBNavbarItem onClick={() => handleNavbarClick("emailform")}>
                      <div className="icon_Dash nav-bar-item">
                        <FontAwesomeIcon icon={faMessage} className="icon" />
                        <span className="Name_item">Messages</span>
                      </div>
                  </MDBNavbarItem>
                  <MDBNavbarItem onClick={() => handleNavbarClick("finedetails")}>
                      <div className="icon_Dash  nav-bar-item">
                        <FontAwesomeIcon
                          icon={faDollar}
                          className="icon"
                        />
                        <span className="Name_item">Fine Details</span>
                      </div>
                  </MDBNavbarItem>
                  <MDBNavbarItem onClick={() => handleNavbarClick("Renewal")}>
                      <div className="icon_Dash  nav-bar-item">
                        <FontAwesomeIcon
                          icon={faRotate}
                          className="icon"
                        />
                        <span className="Name_item">Renewal</span>
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
                <span className="ad_name ">user </span>
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
              <div className="admin_name">User Name</div>

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

export default UserDashboard;