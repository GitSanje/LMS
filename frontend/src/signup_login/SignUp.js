import React, { useState } from 'react';
import './style.css';
import { Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
 import axios from 'axios';

import{
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput}from 'mdb-react-ui-kit'

const SignUp = () => {
  const navigate = useNavigate();
  // collecting the data from the form
  const [showPassword, setShowPassword] = useState(false);
  const [fname,setFname]=useState('')
  const [phone,setPhone]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // when the submit button is clicked
  const handlesubmit=(event)=>{
    event.preventDefault();
    const emailRegex = /^[^\s@]+@heraldcollege\.edu\.np$/;
    const emailRegex_Admin = /^[^\s@]+(\.[^\s@]+)?\.[^\s@]+@heraldcollege\.edu\.np$/;
    // Check if email is valid and password is greater than 8 and store the data in userData
    if(emailRegex.test(email)&&password.length>=8){
      const userData = {
        fname: fname,
        phone: phone,
        email: email,
        password: password
      };
      // Send the data to the backend 
      axios.post('http://localhost/backend/Signup.php',userData) 
      .then(function (response) {
        // If the response is success then redirect to the dashboard foe admin or user
        if (response.data.status === 'success') {
          alert('User added successfully');
          if(emailRegex_Admin.test(email)){
            navigate(`/AdminDashboard?&email=${email}`);}
          else{
            navigate(`/UserDashboard?fname=${fname}&email=${email}`);
          }
        } 
        // Else show the error message
        else {
          alert('Error adding user: ' + response.data.message);
        }
      })
      .catch(function (error) {
        alert('Error adding user: ' + error.message);
      });
    }
    else{
      alert("Password is less than 8");
    }
  }

const togglePassword = () =>{
  setShowPassword(!showPassword);  
}



  return (
    <MDBContainer  className='my-5'>
      <MDBCard >

        <MDBRow className='g-0'>
          <MDBCol md='6 '>
          <MDBCardImage src='https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1677838566~exp=1677839166~hmac=a6906ec41585d1a68c1783b8d6a8411f6182d27ba1e463c6f3885c81042aeeb8' alt="login Image" className='rounded-1 w-100'/>
          </MDBCol>

          <MDBCol md='6  '>
           <MDBCardBody className='d-flex flex-column  ' >
           <div className=' d-flex flex-row ps-5 pt-5 txt' >
           <span className='  h5 fw-mediam mb-0  '>Library management System </span>
            <MDBCardImage src ='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjMwNGExYjEyNzY1MGVjYTZmM2Y5ZGRmMDAzOTI5MGRhODQzMmYwNyZjdD1n/xT77Y1T0zY1gR5qe5O/giphy.gif' alt="login Image" className='rounded-1 wdth'/>
           
           </div>
           <h5 className=' ps-5 fw-median my-4 pd-3 sign'>
            Sign up now
           </h5>
           <div className='d-flex flex-row '>
           <MDBInput wrapperClass='mb-4 mx-5 w-50 fw-bold  ' className='input-field form-group ' label='Full name'placeholder='Enter your name' id='formControlLg' type='text' size="lg" outline-0 onChange={(event) => setFname(event.target.value)} />
           <MDBInput wrapperClass='mb-4 mx-5 w-50 fw-bold  ' className='input-field form-group ' label='Phone number'placeholder='Enter phone no' id='formControlLg' type='text' size="lg" outline-0 onChange={(event) => setPhone(event.target.value)} />
           </div>

           <div  className='d-flex flex-column input-group '>

           
           <MDBInput wrapperClass='mb-4 mx-5 w-80 fw-bold  ' className='input-field form-group ' label='Email address'placeholder='Enter email address' id='formControlLg' type='email' size="lg" outline-0 onChange={(event) => setEmail(event.target.value)} />
            <MDBInput wrapperClass='mb-4 mx-5 w-80 fw-bold ' className='input-field form-group' label='Password' id='formControlLg' placeholder='Enter password' type={ showPassword ? 'text' : 'password'} size="lg" onChange={(event) => setPassword(event.target.value)}  />
            <span className="input-group-text" onClick={togglePassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            
            </div>
           
            <MDBBtn className='mb-4 mx-5 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }}  onClick={handlesubmit}>
           Sign up
            </MDBBtn>

            <div className='d-flex flex-column'>
            <p className='text-center mb-5 pb-lg-2 text-secondary'>
            Thank you for signing up
            <div>or</div>
           <a href="#!" style={{color: '#3B71CA'}}>
              <Link to="/Login">Login</Link></a>

            </p> 
            </div>
           
           </MDBCardBody>
          </MDBCol>
        </MDBRow>

      </MDBCard>
      
    </MDBContainer>
  )
}

export default SignUp
