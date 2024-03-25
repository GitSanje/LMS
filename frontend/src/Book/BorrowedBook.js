
import React, { useState } from 'react';
import {  MDBDataTableV5 } from 'mdbreact'
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import '../Report/report.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Borrowbook = () => {
  const [data, setData] = useState({
    columns: [
      {
        label: "ISBN",
        field: "book_id",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Book ID",
        },
      },
     
      {
        label: "Book name",
        field: "bookname",
        width: 200,
      },
      {
        label: "Date",
        field: "returned_data",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
        width: 270,
      }
    ],
    rows: [
      {
        book_id: "1",
        
        bookname: "Anna Karenina",
        returned_data: "2022-03-25",
        status: "Returned",
      },
      {
        book_id: "2",
      
        bookname: "The Phoenix Project",
        returned_data: "2022-03-26",
        status: "Not returned",
      },
      {
        book_id: "3",
       
        bookname: "Code Complete",
        returned_data: "2022-03-27",
        status: "Not returned",
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
        Borrow books
                </div>
                <div className="D_bord mb-2">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">borrow books</span>
                </div>
        <MDBCol md="4">
          <form onSubmit={handleAddBook}>
            <label>ISBN</label>
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
            <label>Book Name</label>
            <MDBInput
              type="text"
              className='mb-2 input-field '
              name="delayFine"
              id="delayFine"
          
            />
          

          <MDBBtn type="submit" style={{backgroundColor: '#40ABCE', border: 'none', borderRadius: '5px', }} className='mb-3 '>
  Borrow book
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

export default Borrowbook;
