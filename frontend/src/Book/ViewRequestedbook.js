import React,{useState} from "react";
import { MDBTable, MDBTableHead, MDBTableBody,MDBCardBody,MDBCard } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faSearch } from '@fortawesome/free-solid-svg-icons';

// ...



const ViewRequestedbook = () => {

    const [requestedBooks, setrequestedBooks] = useState([
        { id: 1, title: 'The Great Gatsby', name: 'F. Scott Fitzgerald', bookURL: 'https://www.goodreads.com/book/show/4671.The_Great_Gatsby' },
        { id: 2, title: 'To Kill a Mockingbird', name: 'Harper Lee',  bookURL: 'https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird' },
       
      ]);
      const [searchTerm, setSearchTerm] = useState('');
   
    const handleView = (bookURL) => {
        window.open(bookURL, "_blank");
      };

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredBooks = requestedBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
  return (
    <>
    <div className="Welcome mt-3">
    Complete requested books records
            </div>
            <div className="D_bord">
            
              <span className="Das_index"> Dashboard</span>/
              <span className="index">Requested books</span>
            </div>
            <MDBCardBody className='my-2'>
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
    <MDBTable>
      <MDBTableHead>
        <tr>
            <th>ID</th>
         
          <th>Book Name</th>
          <th>Requested by</th>
          <th>Book URL</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filteredBooks.map((requestedBook, index) => (
          <tr key={index}>
            <td>{requestedBook.id}</td>
            <td>{requestedBook.title}</td>
            <td>{requestedBook.name}</td>
         
            <td> <span className='tras_icon'>
                <FontAwesomeIcon
                  icon={faEye}
                  onClick={() => handleView(requestedBook.bookURL)}
                /> View URL
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

export default ViewRequestedbook;
