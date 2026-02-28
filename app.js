const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route for homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Book Search Web App</h1>');
});

// Route for search
app.get('/search', (req, res) => {
    // Implement your search logic here
    res.send('<h1>Search Books</h1>');
});

// Route for book details
app.get('/books/:id', (req, res) => {
    // Implement logic to fetch book details using req.params.id
    res.send(`<h1>Book Details for ID: ${req.params.id}</h1>`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
