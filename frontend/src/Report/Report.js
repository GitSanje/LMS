
import React, { useState } from 'react';
import {  MDBDataTableV5 } from 'mdbreact'
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import './report.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Report = () => {
  const [data, setData] = useState({
    columns: [
      {
        label: "Book ID",
        field: "book_id",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Book ID",
        },
      },
      {
        label: "Username",
        field: "username",
        width: 270,
      },
      {
        label: "Delayfine",
        field: "delayfine",
        width: 200,
      },
      {
        label: "Returned Data",
        field: "returned_data",
        width: 100,
      },
    ],
    rows: [
      {
        book_id: "1",
        username: "John Doe",
        delayfine: "$10.00",
        returned_data: "2022-03-25",
      },
      {
        book_id: "2",
        username: "Jane Smith",
        delayfine: "$5.00",
        returned_data: "2022-03-26",
      },
      {
        book_id: "3",
        username: "Bob Johnson",
        delayfine: "$0.00",
        returned_data: "2022-03-27",
      },
    ],

    searchText: ''
  });

  const handleAddBook = (event) => {
    event.preventDefault();
    setData({
      columns: data.columns,
      rows: [
        ...data.rows,
        {
          book_id: event.target.bookId.value,
          username: event.target.username.value,
          delayfine: event.target.delayFine.value,
          returned_data: event.target.returnDate.value,
        },
      ],
    });
    event.target.reset();
  };

 


  return (
    <MDBContainer>
      <MDBRow>

      <div className="Welcome mt-2">
        Complete Reports
                </div>
                <div className="D_bord mb-2">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Report</span>
                </div>
        <MDBCol md="4">
          <form onSubmit={handleAddBook}>
            <label>Book ID</label>
            <MDBInput
              type="text"
              className='mb-2 input-field '
              name="bookId"
              id="bookId"
           
            />
            <label>Username</label>
            <MDBInput
              type="text"
              className='mb-2 input-field '
              name="username"
              id="username"
             
            />
            <label>Delay Fine</label>
            <MDBInput
              type="text"
              className='mb-2 input-field '
              name="delayFine"
              id="delayFine"
          
            />
            <label>Return Date</label>
            <MDBInput
              type="date"
              className='mb-2 input-field '
              name="returnDate"
              id="returnDate"
             

            />


          <MDBBtn type="submit" style={{backgroundColor: '#40ABCE', border: 'none', borderRadius: '5px', }} className='mb-3 '>
  Add Report
</MDBBtn>

          </form>
        </MDBCol>
        <MDBCol md="8">
        <FontAwesomeIcon icon={faSearch} size='sm' className='search'>

        </FontAwesomeIcon>
        <MDBDataTableV5
            responsive
            hover
            striped
            bordered
            small
            data={data}
            entriesOptions={[5, 10, 15]}
            entries={5}
         
            searchTop
            searchBottom={false}
            infoLabel={["Showing", "to", "of", "entries"]}
            paginationLabel={["Previous", "Next"]}
            noRecordsFoundLabel="No matching records found"
            searchLabel="Search here..."
           
            />

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Report;
