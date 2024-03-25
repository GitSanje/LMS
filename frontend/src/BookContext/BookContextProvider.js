
import React,{createContext, useEffect, useState}  from 'react'
//used to generate unique IDs.
import { v4 as uuidv4 } from 'uuid';


export const BookContext = createContext()
const BookContextProvider = (props) => {
    const [books,setBooks] = useState([
        { id:uuidv4(),category: "Science Fiction", bookno: "001", authorName: "Isaac Asimov" },
        { id:uuidv4(),category: "Fantasy", bookno: "002", authorName: "J.R.R. Tolkien" },
        { id:uuidv4(),category: "Mystery", bookno: "003", authorName: "Agatha Christie" },
        { id:uuidv4(),category: "Romance", bookno: "004", authorName: "Nicholas Sparks" },
        { id:uuidv4(),category: "Thriller", bookno: "005", authorName: "Stephen King" },
      ]);
      useEffect(()=> {
        setBooks(JSON.parse(localStorage.getItem('books')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    })
    const sortedBooks = books.sort((a,b)=>(a.category < b.category ? -1 : 1));



const addCategory = (category, bookno, authorName) => {
    setBooks([...books , {id:uuidv4(), category, bookno, authorName}])
}

const deleteBook= (id) => {
    setBooks(books.filter(book => book.id !== id))
}

const updateBook = (id, updatedBook) => {
    setBooks(books.map((book) => book.id === id ? updatedBook : book))
}

  return (
    <>

<BookContext.Provider value={{sortedBooks, addCategory, deleteBook, updateBook}}>
            {props.children}
        </BookContext.Provider>
    </>
  )
}

export default BookContextProvider
