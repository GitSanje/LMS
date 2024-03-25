import React,{useState, useEffect} from 'react'
import './book.css'
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const UserBooklist = () => {

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


    const [searchTerm, setSearchTerm] = useState('');


 

 
 
  
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
            
          </tr>
        ))}
      </MDBTableBody>
</MDBTable> 
</MDBCard>
</MDBCardBody>
<MDBCardBody>
<MDBCard>

</MDBCard>
</MDBCardBody>
    </>
  )
}
export default UserBooklist;