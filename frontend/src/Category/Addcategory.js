import { MDBCardBody,
    MDBInput,
    MDBCard,
    MDBBtn,MDBCol } from 'mdb-react-ui-kit'
import React,{useContext,useState} from 'react'
import './category.css'
import { BookContext } from '../BookContext/BookContextProvider'
const Addcategory = () => {
    const [category, setCategory] = useState('');
    const [bookno, setBookno] = useState('');
    const [authorName, setAuthorName] = useState('');

    // const {addCategory} = useContext(BookContext);
    // const [newCategory, setnewCategory] = useState({
    //     category:"", bookno:"", authorName:""
    // });


    // const onInputChange = (e) => {
    //     setnewCategory({...newCategory,[e.target.category]: e.target.value})

    // }
    // const {category, bookno, authorName} = newCategory;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addCategory(category, bookno, authorName);
    // }

    
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic
  };
  return (
    <>
     <div className="Welcome">
        Add New category to the system
                </div>
                <div className="D_bord">
               
               
                  <span className="Das_index"> Dashboard</span>/
               
                 
                  <span className="index mx-2">New Category</span>
                  
                </div>
                <MDBCol md="6" >
    <MDBCardBody>
        <MDBCard className='px-2 form_card'>
        <form onSubmit={handleSubmit}>
        <div className="grey-text">
              <MDBInput
                // label="ISBN"
                type="text"
                placeholder='category'
                value={category}
                className="input-field form-group  my-4"
                onChange={(event) => setCategory(event.target.value)}
              />
              <MDBInput
                // label="Book Name"
                type="text"
                value={bookno}
                className="input-field form-group my-4"
                placeholder='Book number'
                onChange={(e) => setBookno(e.target.bookno)}
              />
              <MDBInput
                // label="Author Name"
                type="text"
                placeholder='Author Name'
                value={authorName}
                className="input-field form-group my-4 "
                onChange={(e) => setAuthorName(e.target.authorName)}
              />
           
            </div>
            <div className="text-center mt-4">
            <MDBBtn className='mb-4 mx-5 my-button' color='' size='lg' style={{ backgroundColor: '#40ABCE',border:'none' }} >
          Add Category
            </MDBBtn>
            </div>
      </form>

        </MDBCard>
    </MDBCardBody>
    </MDBCol>
    </>
  )
}

export default Addcategory
