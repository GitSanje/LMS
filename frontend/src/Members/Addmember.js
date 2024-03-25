import { MDBCardBody,
    MDBInput,
    MDBCard,
    MDBBtn,MDBCol } from 'mdb-react-ui-kit'
import React,{useState} from 'react'
import '../Book/book.css'
import axios from 'axios'
// import './Member.css'

const Addmember = () => {
    // Declare the state variables
    const [name, setName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@heraldcollege\.edu\.np$/;
    if(emailRegex.test(email)){
      const userData={
        name:name,
        phoneno:phoneno,
        email:email,
      }
      console.log(userData);
      // Connect to the backend and send the userdata variable
      axios.post('http://localhost/backend/Member/AddMember.php',userData) 
        .then(function (response) {
          // If the user is added to the database
          if (response.data.status === 'success') {
            alert(response.data.message);
          }
          // else user is not added to the database
          else{
            alert('Error adding user: ' + response.data.message);
          }
        })
        .catch(function (error) {
          alert('Error adding : ' + error.message);
        });
    }
    else{
      alert("Email is not valid");
    }
  };
  return (
    <>
     <div className="Welcome">
        Add New member to the system
                </div>
                <div className="D_bord">
               
               
                  <span className="Das_index"> Dashboard</span>/
               
                 
                  <span className="index mx-2">New Member</span>
                  
                </div>
                <MDBCol md="6" >
    <MDBCardBody>
        <MDBCard className='px-2 form_card'>
        <form  onSubmit={handleSubmit}>
        <div className="grey-text">
              <MDBInput
                // label="ISBN"
                type="text"
                placeholder="Member's Name"
                value={name}
                className="input-field form-group  my-4"
                onChange={(event) => setName(event.target.value)}
              />
              <MDBInput
              
                type="text"
                value={phoneno}
                className="input-field form-group my-4"
                placeholder='Phone Number'
                onChange={(e) => setPhoneno(e.target.value)}
              />
              <MDBInput
              
                type="text"
                placeholder='E-mail address'
                value={email}
                className="input-field form-group my-4 "
                onChange={(e) => setEmail(e.target.value)}
              />
           
            </div>
            <div className="text-center mt-4">
            <MDBBtn className='mb-4 mx-5 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }} onSubmit={handleSubmit} >
          Add Member
            </MDBBtn>
            </div>
      </form>

        </MDBCard>
    </MDBCardBody>
    </MDBCol>
    </>
  )
}

export default Addmember
