import React,{useState} from 'react'
import '../Book/book.css'
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NotReturnedBooks from './NotReturnedBooks';

import { faDeleteLeft, faEdit, faSearch, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
const IssueBooks = () => {
  

  const [showEditForm, setShowEditForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
   

   
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
  
      
        const [editBook, setEditBook] = useState(null); 
       


 
  const handleEdit = (book) => {
    // Logic for editing a book with the given id
     // Update the showEditForm state to true
  setShowEditForm(true);

  // Set the book to be edited
  setEditBook(book);
  };
 

  
  const handleSaveEdit = (id, updatedBook) => {
    // Update the book list with the updated book
    const updatedBooks = issuedBooks.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      } else {
        return book;
      }
    });
    setIssuedBooks(updatedBooks);

    // Clear the editBook state and update the showEditForm state to false
    setEditBook(null);
    setShowEditForm(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
        // Delete the book
      
    // Logic for deleting a book with the given id
    setIssuedBooks(issuedBooks.filter((book) => book.id !== id));
    }
  };
 
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setShowEditForm(false);
    }
  };
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = issuedBooks.filter((book) =>
    book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
  
    <div className="Welcome mt-3">
        Complete issue books records
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Issue Books</span>
                </div>
  
    <MDBCardBody className='mt-2'>
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
        
        <MDBCard className='table_card'>
    <MDBTable >
      <MDBTableHead>
        <tr >
        <th>#</th>
        <th>Book Title</th>
            <th>Borrower Name</th>
            <th>Issue Date</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filteredBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.bookTitle}</td>
              <td>{book.borrowerName}</td>
              <td>{book.issueDate}</td>
              <td>{book.dueDate}</td>
              <td>{book.status}</td>
            <td>
                <span className='tras_icon'>
                <FontAwesomeIcon icon={faTrashAlt}  onClick={() => handleDelete(book.id)}> 
                </FontAwesomeIcon>
                </span>
                <span className='edt_icon'>
                <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(book.id)}>
                </FontAwesomeIcon>
                </span>
               
                </td>
          
          </tr>
        ))}
      </MDBTableBody>
</MDBTable> 
</MDBCard>
</MDBCardBody>


<MDBCardBody>
<MDBCard>


{showEditForm && (
      <div className='m-2'>
      <form
  onSubmit={(event) => {
    event.preventDefault();
    handleSaveEdit(editBook.id, {
      dueDate: event.target.dueDate.value,
      Status: event.target.Status.value,
      
    });
  }}
  >
<div className='d-flex flex-row'>


       
          <label htmlFor='title'>Due Date:</label>
          <input type='date' id='dueDate' name='dueDate' value={editBook ? editBook.dueDate : ''}
          className='input-field mx-5'
          onChange={(event) => setEditBook({ ...editBook, dueDate: event.target.value })}

          required />

          <label htmlFor='Status'>Status:</label>
          <input type='text' id='Status' name='Status' value={editBook ? editBook.Status : ''} 
           className='input-field mx-5'
           placeholder='Status'
          onChange={(event) => setEditBook({ ...editBook, Status: event.target.value })} />


</div>      

<div>
      <button type='submit' className='rounded btn_cancel' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' ,color:'#ffff'}}>
        Update</button>
      <span className="btn_cancel mx-3">

        <button   onClick={handleCancel}
      className='rounded btn_cancel' 
      color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none',color:'#ffff' }}>
        Cancel</button>
      </span>
    </div>
          
        </form>
       
       
        
      </div>
)}
 </MDBCard>
 </MDBCardBody>
    </>
  )
}




export default IssueBooks
