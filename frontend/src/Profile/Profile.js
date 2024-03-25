import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput, MDBCardBody } from "mdb-react-ui-kit";
import '../Book/book.css'
import './profile.css'
const Profile =() => {
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
      setImage(URL.createObjectURL(event.target.files[0]));
    };

    
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
    return (
        <div>

             <div className="Welcome mt-2">Welcome to your profile</div>
              <div className="D_bord">
                <span className="Das_index"> Dashboard</span>/
        
                <span className="index">profile</span>
              </div>
            <MDBRow className="mt-1">
          <MDBCol md="4">
            <MDBContainer>
              <MDBRow>
                <MDBCol>
                <img
                  src={image ? image : "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="img-fluid rounded-circle w-50 profile-image mb-2"
                />
                <MDBInput type="file" onChange={handleImageChange} />

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCol>
          <MDBCol md="8">
            <h4 className="text-start profile">Profile info</h4>
            <form onSubmit={handleSubmit} >
            <label>Name</label>
              <MDBInput  type="text" className="input-field form-group "/>
                <label>Email address</label>
              <MDBInput  type="email" className="input-field form-group" />
              <label>Phone Number</label>
              <MDBInput  type="number" className="input-field form-group" />
              <label>Password</label>
              <MDBInput  type="password" className="input-field form-group"/>
              
              <MDBBtn className='mt-3 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }} >
          Save
            </MDBBtn>
            </form>
          </MDBCol>
          </MDBRow>
        </div>
      );
    }

export default Profile
