import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody }
from 'mdb-react-ui-kit';
import './book.css'
import axios from 'axios';

const AddBook = () => {
  // Declare the state variables
  const [isbn, setIsbn] = useState('');
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');

  const handlesubmit = (event) => {
    event.preventDefault();
    // Store the current user input data in the userdata variable
    const userData={
      isbn:isbn,
      bookName:bookName,
      authorName:authorName,
      year:year,
      category:category
    }
    // Connect to the backend and send the userdata variable
    axios.post('http://localhost/backend/Books/AddBook.php',userData) 
      .then(function (response) {
        // If the book is added to the database
        if (response.data.status === 'success') {
          alert('Book added successfully');
        }
        // else book is not added to the database
        else{
          alert('Error adding book: ' + response.data.message);
        }
      })
      .catch(function (error) {
        alert('Error adding : ' + error.message);
      });
  };

  return (
        <MDBCol md="6" >
        <div className="Welcome">Add New book to the system
                </div>
                <div className="D_bord">
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index mx-2">New Book</span>          
                </div>
        <MDBCard className='my-2 form_card'>
        <MDBCardBody >           
            <div className="grey-text">
              <MDBInput
                // label="ISBN"
                type="text"
                placeholder='ISNB'
                value={isbn}
                className="input-field form-group  my-4"
                onChange={(event) => setIsbn(event.target.value)}
              />
              <MDBInput
                // label="Book Name"
                type="text"
                value={bookName}
                className="input-field form-group my-4"
                placeholder='Book name'
                onChange={(event) => setBookName(event.target.value)}
              />
              <MDBInput
                // label="Author Name"
                type="text"
                placeholder='Author Name'
                value={authorName}
                className="input-field form-group my-4 "
                onChange={(event) => setAuthorName(event.target.value)}
              />
              <MDBInput
                // label="Edition"
                type="text"
                className="input-field form-group my-4 "
                placeholder='Year'
                value={year}
                onChange={(event) => setYear(event.target.value)}
              />
              <MDBInput
                // label="Department"
                type="text"
                className="input-field form-group my-4 "
                placeholder='Category'
                value={category}
                onChange={(event) => setCategory(event.target.value)}
              />
            </div>
            <div className="text-center mt-4">
            <MDBBtn className='mb-4 mx-5 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }} onClick={handlesubmit}>
          Add Book
            </MDBBtn>

            </div>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
     
  );
};

export default AddBook;
