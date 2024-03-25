import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faEdit, faSearch, faTrashAlt, faTrashArrowUp } from '@fortawesome/free-solid-svg-icons';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead } 
from 'mdb-react-ui-kit'
import '../Category/category.css'
import axios from 'axios';

const MemberList = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
      axios.post('http://localhost/backend/Member/MemberList.php')
        .then(function (response) {
          // store the members in the member state variable
          const data = response.data;
          setMembers(data);
        })
        .catch(function (error) {
          alert(error);
        });
    },[]);
    const [showEditForm, setShowEditForm] = useState(false);

         
    const [editMember, setEditMember] = useState(null); 
    const [searchTerm, setSearchTerm] = useState('');


 
    const handleEdit = (catgrs) => {
      // Logic for editing a book with the given id
       // Update the showEditForm state to true
    setShowEditForm(true);
  
    // Set the book to be edited
    setEditMember(catgrs);
    };
     
  const handleSaveEdit = (id, updatedMember) => {
    // Update the book list with the updated book
    const updatedMembers = members.map((mbr) => {
      if (mbr.id === id) {
        return { ...mbr, ...updatedMember };
      } else {
        return mbr;
      }
    });
    setMembers(updatedMembers);

    // Clear the editMember state and update the showEditForm state to false
    setEditMember(null);
    setShowEditForm(false);
  };
  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel?')) {
      setShowEditForm(false);
    }
  };
  
    const handleDelete = (email) => {
      if (window.confirm('Are you sure you want to delete this member?')) {
        // Delete the book
        const userData={
          email:email,
        }
        // Connect to the backend and send the userdata variable
        axios.post('http://localhost/backend/Member/DeleteMember.php',userData) 
          .then(function (response) {
            // If the book is added to the database
            if (response.data.status === 'success') {
              alert(response.data.message);
            }
            // else book is not added to the database
            else{
              alert('Error deleting user: ' + response.data.message);
            }
          })
          .catch(function (error) {
            alert('Error deleting : ' + error.message);
          });

        setMembers(members.filter((member) => member.email !== email));
      }
    };

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredMembers = members.filter((member) =>
      member.Full_Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  
  
    return (
      <>
      <div className="Welcome mt-3">
        Complete Member records
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">Member's List</span>
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
    <MDBTable >
      <MDBTableHead>
        <tr >
          <th>#</th>
          <th>Member Name</th>
          <th>Phone Number</th>
          <th>Email Address</th>
          <th>Action</th>          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {filteredMembers.map((mbr) => (
          <tr key={mbr.id}>
            <td>{mbr.id}</td>
            <td>{mbr.Full_Name}</td>
            <td>{mbr.Phone_No}</td>
            <td>{mbr.Email}</td>
           
            <td>
                <span className='tras_icon'>
                <FontAwesomeIcon icon={faTrashAlt}  onClick={() => handleDelete(mbr.Email)}> 
                </FontAwesomeIcon>
                </span>
                <span className='edt_icon'>
                <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit(mbr.id)}>
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
    handleSaveEdit(editMember.id, {
        Name: event.target.Name.value,
        Phoneno: event.target.Phoneno.value,
        Email: event.target.Email.value,
    
    });
  }}
>
<div className="d-flex flex-row  "> 
<label htmlFor='Name'>Member's Name:</label>
          <input type='text' id='Name' placeholder="Member's Name" name='Name' value={editMember ? editMember.Name : ''}
          className='input-field mx-3'
          onChange={(event) => setEditMember({ ...editMember, Name: event.target.value })}

           />

          <label htmlFor='Phoneno'>Phone number:</label>
          <input type='number' id='Phoneno' name='Phoneno' value={editMember ? editMember.Phoneno : ''} 
           className='input-field mx-3'
           placeholder='Phone number'
          onChange={(event) => setEditMember({ ...editMember, Phoneno: event.target.value })} />

          <label htmlFor='Email'>Email:</label>
          <input type='text' id='Email' name='Email' value={editMember ? editMember.Email : ''} 
           className='input-field mx-3'
           placeholder='Email Address'
          onChange={(event) => setEditMember({ ...editMember, Email: event.target.value })} />
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
    );
  };
  

export default MemberList