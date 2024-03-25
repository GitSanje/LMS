import React, { useState } from 'react';
import IssueBooks from './IssueBooks';
import NotReturnedBooks from './NotReturnedBooks';

const Parent = () => {
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

  return (
    <div>
      <IssueBooks issuedBooks={issuedBooks} setIssuedBooks={setIssuedBooks} />
      <NotReturnedBooks issuedBooks={issuedBooks} />
    </div>
  );
};

export default Parent;
