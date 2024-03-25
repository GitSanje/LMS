import React, { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

const Renewals = () => {
  const [borrowedItems, setBorrowedItems] = useState([
    { id: 1, name: 'The Catcher in the Rye', dueDate: '2023-04-15', renewed: false },
    { id: 2, name: 'To Kill a Mockingbird', dueDate: '2023-04-14', renewed: false },
    { id: 3, name: '1984', dueDate: '2023-04-10', renewed: true },
    { id: 4, name: 'The Great Gatsby', dueDate: '2023-04-17', renewed: false },
    { id: 5, name: 'The Grapes of Wrath', dueDate: '2023-04-09', renewed: true },
  ]);

  const requestRenewal = (id) => {
    const updatedItems = borrowedItems.map((item) =>
      item.id === id ? { ...item, renewed: true } : item
    );
    setBorrowedItems(updatedItems);
  };

  return (
    <>
    <div className="Welcome mt-3">Renewals</div>
      <div className="D_bord">
        <span className="Das_index"> Dashboard</span>/
        <span className="index">renewal</span>
      </div>
      <MDBCardBody className="mt-2">
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>Item Name</th>
              <th>Due Date</th>
              <th>Renewal Status</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {borrowedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.dueDate}</td>
                <td>
                  {item.renewed ? (
                    <span className="text-success">Renewed</span>
                  ) : (
                    <span className="text-danger">Not Renewed</span>
                  )}
                </td>
                <td>
                  {!item.renewed && (
                    <button size="sm" className="rbtn" onClick={() => requestRenewal(item.id)}>
                      Request Renewal
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBCardBody>
    </>
  );
};

export default Renewals;
