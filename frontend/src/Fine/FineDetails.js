import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { MDBCardBody } from 'mdb-react-ui-kit';

const FineDetails = () => {
  const [fines, setFines] = useState([
    { name: 'The Catcher in the Rye', dueDate: '2023-04-15', fine: 0, paid: false },
    { name: 'To Kill a Mockingbird', dueDate: '2023-04-14', fine: 0, paid: false },
    { name: '1984', dueDate: '2023-04-10', fine: 0, paid: false },
  ]);
  const [paidFines, setPaidFines] = useState([]);

  const calculateFine = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const daysOverdue = (Math.ceil((today - due) / (1000 * 60 * 60 * 24))) -1;
    if (daysOverdue > 0) {
        return { daysOverdue: daysOverdue +" days", fine: daysOverdue * 0.50 }; // return daysOverdue and fine as an object
    } else {
        return { daysOverdue: 0, fine: 0 }; // return 0 days overdue and 0 fine as an object
    }
  };

  const handlePayFine = (index) => {
    const paidFine = fines[index];
    setPaidFines([...paidFines, paidFine]);
    onPayFine(index);
  };

  const onPayFine = (index) => {
    const updatedFines = [...fines];
    updatedFines[index].paid = true;
    setFines(updatedFines);
  };

  return (


    <>

<div className="Welcome mt-3">
        Complete fine details
                </div>
                <div className="D_bord">
                
                  <span className="Das_index"> Dashboard</span>/
                  <span className="index">fine details</span>
                </div>
 <MDBCardBody className='mt-2'>
    <MDBTable>
      <MDBTableHead>
        <tr>
          <th>Book Name</th>
          <th>Due Date</th>
          <th>Days Overdue</th>
          <th>Fine/Fee</th>
          <th>Status</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {fines.map((item, index) => {
              const fine = calculateFine(item.dueDate);
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.paid ? '-' : fine.daysOverdue}</td>
                  <td>${item.paid ? 0 : fine.fine.toFixed(2)}</td>
                  <td>
                    {item.paid ? (
                      <span className="text-success">Paid</span>
                    ) : (
                      <button className="btn btn-sm btn-primary" onClick={() => handlePayFine(index)}>
                        Pay
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
      </MDBTableBody>
    </MDBTable>

    </MDBCardBody>


    </>
  );
};

export default FineDetails;
