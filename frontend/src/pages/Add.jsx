import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBookSuccess } from '../actions/bookActions';

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleChange = (e) => {
  const { name, value } = e.target;
  setBook(prev => ({ ...prev, [name]: value }));
};

  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post('http://localhost:8080/books', book);
      const newBook = response.data;

      // Dispatch the action to update the Redux store
      dispatch(addBookSuccess(newBook));

      navigate('/');
    } catch (error) {
      console.log(error);
    }
    }

  return (
    <div>
      <h1>Add New Book</h1>
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
      <button onClick={handleClick}>Add Book</button>
    </div>
  )
}
