import React,{useState, useEffect} from 'react'
import './book.css'
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faSearch, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Booklist = () => {
  const [showEditForm, setShowEditForm] = useState(false);

    const [books, setBooks] = useState([]);
    // Fetch the books from the backend
    useEffect(() => {
      axios.post('http://localhost/backend/Books/BookList.php')
        .then(function (response) {
          // store the books in the books state variable
          const data = response.data;
          setBooks(data)
        })
        .catch(function (error) {
          alert(error);
        });
    },[]);

    const [editBook, setEditBook] = useState(null); 
    const [searchTerm, setSearchTerm] = useState('');


 
  const handleEdit = (id) => {
     // Update the showEditForm state to true
  setShowEditForm(true);

  // Set the book to be edited
  setEditBook(id);
  };
 

  
  const handleSaveEdit = (id, updatedBook) => {
    // Update the book in the database
    axios.post(`http://localhost/backend/Books/UpdateBook.php?`, editBook)
    .then(function (response) {
      // If the book is updated in the database
      if (response.data.status === 'success') {
        alert('Book updated successfully');
      }
      // else book is not updated in the database
      else {
        alert('Error updating book: ' + response.data.message);
      }
    })
    .catch(function (error) {
      alert('Error updating book: ' + error.message);
    });
    // Update the book list with the updated book
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      } else {
        return book;
      }
    });
    setBooks(updatedBooks);
    // Clear the editBook state and update the showEditForm state to false
    setEditBook(null);
    setShowEditForm(false);
  };

  const handleDelete = (id,title) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
        // Delete the book
        const userData={
          id:id,
          title:title
        }
        // Connect to the backend and send the userdata variable
        axios.post('http://localhost/backend/Books/DeleteBook.php',userData) 
          .then(function (response) {
            // If the book is added to the database
            if (response.data.status === 'success') {
              alert('Book deleted successfully');
            }
            // else book is not added to the database
            else{
              alert('Error deleting book: ' + response.data.message);
            }
          })
          .catch(function (error) {
            alert('Error deleting : ' + error.message);
          });
    // Logic for deleting a book with the given id
    setBooks(books.filter((book) => book.id !== id));
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

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
  
    <div className="Welcome mt-3">
        Complete books records
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Book List</span>
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
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Avaibility</th>
          <th>Year</th>
          <th>Action</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filteredBooks.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.category}</td>
            <td>{book.availability}</td>
            <td>{book.year}</td>
            <td>
                <span className='tras_icon'>
                <FontAwesomeIcon icon={faTrashAlt}  onClick={() => handleDelete(book.id,book.title)}> 
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
    handleSaveEdit(editBook.id,{
      title: event.target.title.value,
      author: event.target.author.value,
      category: event.target.category.value,
      availability: event.target.avaibility.value,
      year: parseInt(event.target.year.value),
    });
  }}
  >

       <div  className="d-flex flex-row  " >

      
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' placeholder='Title' name='title' value={editBook ? editBook.title : ''}
          className='input-field_edit mx-5'
          onChange={(event) => setEditBook({ ...editBook, title: event.target.value })}

          required />

          <label htmlFor='author'>Author:</label>
          <input type='text' id='author' name='author' value={editBook ? editBook.author : ''} 
           className='input-field_edit mx-5'
           placeholder='Author'
          onChange={(event) => setEditBook({ ...editBook, author: event.target.value })} />

          <label htmlFor='category'>Category:</label>
          <input type='text' id='category' name='category' value={editBook ? editBook.category : ''} 
           className='input-field_edit mx-5'
           placeholder='Category'
          onChange={(event) => setEditBook({ ...editBook, category: event.target.value })} />
</div>
          <label htmlFor='avaibility'>Avaibility:</label>
          <input type='text' id='avaibility' name='avaibility' value={editBook ? editBook.availability : ''} 
           className='input-field_edit mx-5 my-3'
           placeholder='Avaibility'
          onChange={(event) => setEditBook({ ...editBook, availability: event.target.value })} />

          <label htmlFor='year'>Year:</label>
          <input type='number' id='year' name='year' value={editBook ? editBook.year : ''}
           className='input-field_edit mx-5'
           placeholder='Year'
           onChange={(event) => setEditBook({ ...editBook, year: parseInt(event.target.value) })} />
           
           


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
export default Booklist;