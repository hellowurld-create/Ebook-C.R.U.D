# Book Store App - CRUD Application📖📕📚📔

This repository contains a simple CRUD (Create, Read, Update, Delete) Book Store application built using React, MySQL, Express, Node.js, and Redux.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MySQL: [Download and Install MySQL](https://dev.mysql.com/downloads/)
- Git: [Download and Install Git](https://git-scm.com/)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/hellowurld-create/book-store-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-store-app
   ```

3. Install dependencies for the server:

   ```bash
   cd server
   npm install
   ```

4. Set up the MySQL database:
   - Create a new MySQL database.
   - Update the database configuration in `server/config/db.config.js` with your database credentials.

5. Run the server:

   ```bash
   npm start
   ```

   This will start the Express server.

6. Install dependencies for the client:

   ```bash
   cd ../client
   npm install
   ```

7. Run the React app:

   ```bash
   npm start
   ```

   This will launch the React app in your default web browser.

## Usage

- Navigate to `http://localhost:3000` to access the Book Store app.

The application provides a simple interface for managing books, including functionalities like adding new books, viewing existing books, updating book details, and deleting books.

## Technologies Used

- React: JavaScript library for building user interfaces
- Node.js: JavaScript runtime for server-side development
- Express: Web application framework for Node.js
- MySQL: Relational database management system
- Redux: State management library for JavaScript applications

## Directory Structure

- `frontend`: Contains the React frontend code.
- `backend`: Contains the Express server code.

## Contributing

Feel free to contribute by opening issues, providing feedback, or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
