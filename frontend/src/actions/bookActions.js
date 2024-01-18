// Define your action types
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';

// Action creators
export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const deleteBookSuccess = (id) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: id,
});

export const addBookSuccess = (book) => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

export const updateBookSuccess = (id) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: id,
});