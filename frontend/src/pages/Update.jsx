import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBookSuccess } from '../actions/bookActions';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });


  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

   // Get the book from the Redux store
  const books = useSelector((state) => state.books);
  const selectedBook = Array.isArray(books) ? books.find((book) => book.id === bookId) : null;


  useEffect(() => {
    // Set the book data in the state when the component mounts
    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [selectedBook]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setBook(prev => ({ ...prev, [name]: value }));
};

  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/books/${bookId}`,
        book
      );

      // Dispatch the action to update the Redux store
      dispatch(updateBookSuccess(response.data));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
    }

  return (
    <div>
      <h1>Update Book</h1>
      <input type="text"
        placeholder='title'
        onChange={handleChange}
        name="title"
      />
      <input type="text"
        placeholder='desc'
        onChange={handleChange}
        name="desc" />
      <input type="text"
        placeholder='price'
        onChange={handleChange}
        name="price" />
      <input type="text"
        placeholder='cover'
        onChange={handleChange}
        name="cover" />
      <button onClick={handleClick}>Update Book</button>
    </div>
  )
}
