import React, { useState } from 'react';
import { MDBContainer, 
    MDBRow, MDBCol, MDBInput, MDBBtn, 
    MDBIcon ,MDBCard,MDBCardBody} from 'mdb-react-ui-kit';

import '../Members/Members.css'
const IssueABook =()=> {

  const [showEditForm, setShowEditForm] = useState(false);
    const [bookTitle, setBookTitle] = useState('');
    const [borrowerName, setBorrowerName] = useState('');
    const [issueDate, setIssueDate] = useState('');
    const [dueDate, setDueDate] =useState('');
    const [status, setStatus] = useState('');
    // const [slctdueDate, setslctDueDate] = useState('Select a due date');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement issuing book logic here, such as sending a request to a server
    // or updating a local database
  }

  return (

    <>
      <div className="Welcome">
        Issue a book to a member
                </div>
                <div className="D_bord">
               
               
                  <span className="Das_index"> Dashboard</span>/
               
                 
                  <span className="index mx-2">Issue A book</span>
                  
                </div>
           
                <MDBCol md="6" >
    <MDBCardBody>
        <MDBCard className='px-2 form_card'>
        <form onSubmit={handleSubmit}>
        <div className="grey-text">
              <MDBInput
             
                type="text"
                placeholder="Book Title"
                value={bookTitle}
                className="input-field form-group  my-4"
                onChange={(event) => setBookTitle(event.target.value)}
              />
              <MDBInput
              
                type="text"
                value={borrowerName}
                placeholder='Borrower Name'
                className="input-field form-group my-4"
                
                onChange={(e) => setBorrowerName(e.target.phoneno)}
              />
                  <label>Issue Date</label>
              <MDBInput
              
                type="date"
           
                value={issueDate}
                className="input-field form-group  mb-4"
                onChange={(e) => setIssueDate(e.target.email)}
              />
            <label>Due Date</label>
            <MDBInput 
                // label="Due Date" 
                type="date" 
                className='input-field form-group mb-4'
                 value={dueDate}
                onChange={(event) => setDueDate(event.target.value)} 
                hint="Select a due date"
                labelClass="font-weight-bold"
                />

                 <MDBInput type="text"
                 placeholder='Status'
                   className='input-field form-group '
                  value={status} 
                  onChange={(event) => setStatus(event.target.value)} 
                  
                   />

            
           
            </div>
            <div className="text-center mt-4">
            <MDBBtn className='mb-4 mx-5 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }} >
            Issue Book
            </MDBBtn>
            </div>
      </form>

        </MDBCard>
    </MDBCardBody>
    </MDBCol>
   </>
  );
}

export default IssueABook;
