import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faSearch, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit'

const UserCategoryList = () => {
    const [categories, setCategories] = useState([
      { id: 1, categoryType: 'Fiction', bookNum: 2, authorName: 'F. Scott Fitzgerald, Harper Lee' },
      { id: 2, categoryType: 'Dystopian', bookNum: 2, authorName: 'George Orwell' },
      { id: 3, categoryType: 'Non-fiction', bookNum: 1, authorName: 'Malcolm Gladwell' },
    ]);
 

    const [searchTerm, setSearchTerm] = useState('');

       



    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredcategories = categories.filter((category) =>
    category.categoryType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  
    return (
      <>
      <div className="Welcome mt-3">
        Complete Category records
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Category List</span>
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
          <th>Category Type</th>
          <th>Book Number</th>
          <th>Author Name</th>
         
        
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
        {filteredcategories.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.categoryType}</td>
            <td>{book.bookNum}</td>
            <td>{book.authorName}</td>
           
            
          
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
    );
  };
  

export default UserCategoryList
