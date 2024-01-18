// bookReducer.js

import {
  FETCH_BOOKS_SUCCESS,
  DELETE_BOOK_SUCCESS,
  ADD_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
} from '../actions/bookActions';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case UPDATE_BOOK_SUCCESS: {
      // Use block statement for case
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload.id ? action.payload : book
      );
      return {
        ...state,
        books: updatedBooks,
      };
    }
    default:
      return state;
  }
};

export default bookReducer;
