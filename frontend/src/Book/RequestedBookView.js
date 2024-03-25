import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';

const RequestedBookView = (props) => {
  const [name, setName] = useState(props.name);
  const [bookName, setBookName] = useState(props.bookName);
  const [bookUrl, setBookUrl] = useState(props.bookUrl);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  }

  const handleBookUrlChange = (e) => {
    setBookUrl(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
    // You can use axios or fetch to make a POST request to the server
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Requested Book View</p>
                <div className="grey-text">
                  <MDBInput label="Name" value={name} onChange={handleNameChange} icon="user" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="Book Name" value={bookName} onChange={handleBookNameChange} icon="book" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput label="Book URL" value={bookUrl} onChange={handleBookUrlChange} icon="link" group type="text" validate error="wrong"
                    success="right" />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="primary" type="submit">
                    Save Changes
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RequestedBookView;
