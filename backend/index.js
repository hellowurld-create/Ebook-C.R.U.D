import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqlpassword123.com',
    database: 'test',
});


const updateQuery = "ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlpassword123.com';";

app.use(express.json());
app.use(cors())

db.query(updateQuery, (updateErr, updateResult) => {
    if (updateErr) {
        console.error('Error updating user authentication:', updateErr.message);
    } else {
        console.log('User authentication updated successfully.');
    }
});

app.get("/", (req, res) => {
    res.json('Message from server');
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error('Error inserting book:', err.message);
            return res.json(err);
        }
        return res.json("Book Created Successfully");
    });
});

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q, [bookId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Book Deleted Successfully");  
    })
})

app.put('/books/:id', (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

    const values = [
       req.body.title,
       req.body.desc,
        req.body.price,
        req.body.cover, 
    ]

    db.query(q, [...values,bookId], (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json("Book Updated Successfully");  
    })
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
