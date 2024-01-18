import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksSuccess, deleteBookSuccess } from '../actions/bookActions';

export const Books = () => {
   const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8080/books");
        dispatch(fetchBooksSuccess(res.data));

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/books/"+id);
     dispatch(deleteBookSuccess(id));
    } catch (error) {
      console.log(error)
    }
  }

    return(
      <div className='container'>
        <h1>Flux Book Store</h1>
        <div className='books'>
          {books.map(book => (
          <div key={book.id}>
            { book.cover && <img src={book.cover} alt="" /> }
            <h2>{book.title}</h2>
              <p>{book.desc}</p>
              <span>{book.price}</span>
              <button className="update"><Link to={`/update/${book.id}`}>Update</Link></button>
              <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
              </div>
          ))}
        </div>
        <button><Link to="/add">Add a Book</Link></button>
      </div>

    )
  
}
