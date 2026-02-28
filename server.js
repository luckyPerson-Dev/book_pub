'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Homepage route
app.get('/', (req, res) => {
    res.send('Welcome to the Book Publishing API!');
});

// Search route
app.get('/search', (req, res) => {
    // Sample search functionality
    const query = req.query.q;
    // Replace with actual search logic
    res.json({ message: `Search results for: ${query}` });
});

// Book details route
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id;
    // Replace with actual logic to get book details
    res.json({ id: bookId, title: 'Sample Book', author: 'Author Name' });
});

// API endpoint example
app.get('/api/books', (req, res) => {
    // Replace with logic to retrieve list of books
    res.json([{ title: 'Book 1' }, { title: 'Book 2' }]);
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
