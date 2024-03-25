import React, { useState } from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Report/report.css'

const Fine = () => {
  const [data, setData] = useState({
    columns: [
      {
        label: 'Fine ID',
        field: 'fine_id',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Fine ID',
        },
      },
      {
        label: 'Username',
        field: 'username',
        width: 270,
      },
      {
        label: 'Book ID',
        field: 'book_id',
        width: 200,
      },
      {
        label: 'Fine Amount',
        field: 'fine_amount',
        width: 100,
      },
    ],
    rows: [
      {
        fine_id: '1',
        username: 'John Doe',
        book_id: '1',
        fine_amount: '$5.00',
      },
      {
        fine_id: '2',
        username: 'Jane Smith',
        book_id: '2',
        fine_amount: '$2.50',
      },
      {
        fine_id: '3',
        username: 'Bob Johnson',
        book_id: '3',
        fine_amount: '$0.00',
      },
    ],
    searchText: '',
  });

  const handleAddFine = (event) => {
    event.preventDefault();
    setData({
      columns: data.columns,
      rows: [
        ...data.rows,
        {
          fine_id: event.target.fineId.value,
          username: event.target.username.value,
          book_id: event.target.bookId.value,
          fine_amount: event.target.fineAmount.value,
        },
      ],
    });
    event.target.reset();
  };

  return (
    <MDBContainer>
      <MDBRow>
        <div className="Welcome mt-2">Fine Reports</div>
        <div className="D_bord mb-2">
          <span className="Das_index"> Dashboard</span>/
          <span className="index">Fine</span>
        </div>
        <MDBCol md="4">
          <form onSubmit={handleAddFine}>
            <label>Fine ID</label>
            <MDBInput
              type="text"
              className="mb-2 input-field "
              name="fineId"
              id="fineId"
            />
            <label>Username</label>
            <MDBInput
              type="text"
              className="mb-2 input-field "
              name="username"
              id="username"
            />
            <label>Book ID</label>
            <MDBInput
              type="text"
              className="mb-2 input-field "
              name="bookId"
              id="bookId"
            />
            <label>Fine Amount</label>
            <MDBInput
              type="text"
              className="mb-2 input-field "
              name="fineAmount"
              id="fineAmount"
            />
            <MDBBtn
              type="submit"
              style={{
                backgroundColor: '#40ABCE',
                border: 'none',
                borderRadius: '5px',
              }}
              className="mb-3 "
            >
              Add Fine
            </MDBBtn>
          </form>
        </MDBCol>


        <MDBCol md="8">
        <FontAwesomeIcon icon={faSearch} size='sm' className='search'></FontAwesomeIcon>
      
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

export default Fine;