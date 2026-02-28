const express = require('express');
const axios = require('axios');
const cache = require('memory-cache');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware for error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Route to search for books
app.get('/search', async (req, res) => {
    const { query } = req;
    const cacheKey = `search_${query.q}`;
    const cachedResults = cache.get(cacheKey);

    if (cachedResults) {
        return res.json(cachedResults);
    }

    try {
        const response = await axios.get(`https://openlibrary.org/search.json`, { params: query });
        cache.put(cacheKey, response.data, 60000); // Cache data for 1 minute
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from Open Library:', error);
        res.status(500).send('Error fetching data.');
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
