import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead,MDBBtn } 
from 'mdb-react-ui-kit';
import'../Book/book.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft,
    faSearch,
    faTrashAlt } 
from '@fortawesome/free-solid-svg-icons';




const NotReturnedBooks = () => {
  const [issuedBooks, setIssuedBooks] = useState([
    {
      id: 1,
      bookTitle: 'The Great Gatsby',
      borrowerName: 'John Doe',
      issueDate: '2023-03-25',
      dueDate: '2023-04-01',
      status: 'Checked Out'
    },
    {
      id: 2,
      bookTitle: 'To Kill a Mockingbird',
      borrowerName: 'Jane Smith',
      issueDate: '2023-03-20',
      dueDate: '2023-03-23',
      status: 'Checked Out'
    },
    {
      id: 3,
      bookTitle: 'To Kill a Mockingbird',
      borrowerName: 'Jane Smith',
      issueDate: '2023-03-20',
      dueDate: '2023-03-27',
      status: 'Not check out'
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const calculateNotReturnedBooks = (issuedBooks) => {
    const today = new Date();
    return issuedBooks.filter((book) => book.status === "Checked Out").map((book) => {
      const dueDate = new Date(book.dueDate);
      const daysOverdue = Math.max(Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24)), 0) +" days";
      return {
        ...book,
        daysOverdue,
      };
    });
  };
  const [notReturnedBooks, setNotReturnedBooks] = useState(
    calculateNotReturnedBooks(issuedBooks)
  );

  const handleReturnBook = (id) => {
    const updatedBooks = notReturnedBooks.map((book) => {
      if (book.id === id) {
        return { ...book, daysOverdue: 0+ " days ,"+" Returned"};
      }
      return book;
    });
    setNotReturnedBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    const filteredBooks = notReturnedBooks.filter((book) => book.id !== id);
    setNotReturnedBooks(filteredBooks);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotreturnedBooks = notReturnedBooks.filter((book) =>
    book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <div className="Welcome mt-3">Complete Not-Returned book records</div>
      <div className="D_bord">
        <span className="Das_index"> Dashboard</span>/
        <span className="index">Not-Returned Books</span>
      </div>

      <MDBCardBody className="my-2">
      <div>
    <FontAwesomeIcon icon={faSearch} size='sm' className='search'> </FontAwesomeIcon>
        <input
          type="text"
          className="search_container mb-2"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
        <MDBCard className="table_card">
          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Borrower Name</th>
                <th>Issue Date</th>
                <th>Due Date</th>
                <th>Days Overdue</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {filteredNotreturnedBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.bookTitle}</td>
                  <td>{book.borrowerName}</td>
                  <td>{book.issueDate}</td>
                  <td>{book.dueDate}</td>
                  <td>{book.daysOverdue}</td>
                  <td>
                    <span className="tras_icon">
                      <FontAwesomeIcon
                        icon={faTrashAlt}
                        onClick={() => handleDeleteBook(book.id)}
                      ></FontAwesomeIcon>
                    </span>
                    <span className="edt_icon">
                      <FontAwesomeIcon
                        icon={faRotateLeft}
                        onClick={() => handleReturnBook(book.id)}
                      ></FontAwesomeIcon>
                    </span>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </MDBCard>
      </MDBCardBody>
    </>
  );
};

export default NotReturnedBooks;

