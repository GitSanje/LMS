import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faSearch, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit'

const CategoryList = () => {
    const [categories, setCategories] = useState([
      { id: 1, categoryType: 'Fiction', bookNum: 2, authorName: 'F. Scott Fitzgerald, Harper Lee' },
      { id: 2, categoryType: 'Dystopian', bookNum: 2, authorName: 'George Orwell' },
      { id: 3, categoryType: 'Non-fiction', bookNum: 1, authorName: 'Malcolm Gladwell' },
    ]);
    const [showEditForm, setShowEditForm] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [editCategory, setEditCategory] = useState(null); 
       


 
    const handleEdit = (catgrs) => {
      // Logic for editing a book with the given id
       // Update the showEditForm state to true
    setShowEditForm(true);
  
    // Set the book to be edited
    setEditCategory(catgrs);
    };
     
  const handleSaveEdit = (id, updatedBook) => {
    // Update the book list with the updated book
    const updatedBooks = categories.map((book) => {
      if (book.id === id) {
        return { ...book, ...updatedBook };
      } else {
        return book;
      }
    });
    setCategories(updatedBooks);

    // Clear the editCategory state and update the showEditForm state to false
    setEditCategory(null);
    setShowEditForm(false);
  };
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setShowEditForm(false);
    }
  };
  
    const handleDelete = (id) => {
      if (window.confirm('Are you sure you want to delete this category?')) {
        setCategories(categories.filter((category) => category.id !== id));
      }
    }

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
          <th>Action</th>
        
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      
        {filteredcategories.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.categoryType}</td>
            <td>{book.bookNum}</td>
            <td>{book.authorName}</td>
           
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
      <div className="m-2 ">
      <form
  onSubmit={(event) => {
    event.preventDefault();
    handleSaveEdit(editCategory.id, {
        categoryType: event.target.categoryType.value,
        bookNum: event.target.bookNum.value,
        authorName: event.target.authorName.value,
    
    });
  }}
>
<div className='d-flex flex-row'> 
<label htmlFor='categoryType'>Category:</label>
          <input type='text' id='categoryType' placeholder='Category' name='categoryType' value={editCategory ? editCategory.categoryType : ''}
          className='input-field mx-3'
          onChange={(event) => setEditCategory({ ...editCategory, categoryType: event.target.value })}

           />

          <label htmlFor='bookNum'>Book number:</label>
          <input type='text' id='bookNum' name='bookNum' value={editCategory ? editCategory.bookNum : ''} 
           className='input-field mx-3'
           placeholder='Book number'
          onChange={(event) => setEditCategory({ ...editCategory, bookNum: event.target.value })} />

          <label htmlFor='authorName'>Category:</label>
          <input type='text' id='authorName' name='authorName' value={editCategory ? editCategory.authorName : ''} 
           className='input-field mx-3'
           placeholder='Author name'
          onChange={(event) => setEditCategory({ ...editCategory, authorName: event.target.value })} />
</div>
<span>
<button type='submit' className='rounded btn_cancel' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' ,color:'#ffff'}}>
        Update</button>
      <span className="btn_cancel mx-3">

        <button   onClick={handleCancel}
      className='rounded btn_cancel' 
      color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none',color:'#ffff' }}>
        Cancel</button>
      </span>
      </span>
</form>


</div>
)}
</MDBCard>
</MDBCardBody>

      </>
    );
  };
  

export default CategoryList
