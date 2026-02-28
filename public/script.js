// Book Search Web App Client-Side JavaScript

// Toggle dark mode functionality
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

// Search form handling
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = searchInput.value;
    await fetchBooks(query);
});

// Fetch books from API
const fetchBooks = async (query) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayBooks(data.items);
    } catch (error) {
        handleError(error);
    }
};

// Display fetched books
const displayBooks = (books) => {
    resultsContainer.innerHTML = '';
    books.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.volumeInfo.title}</h3>`;
        // Lazy loading images
        const img = document.createElement('img');
        img.src = book.volumeInfo.imageLinks?.thumbnail || 'placeholder.png';
        img.loading = 'lazy';
        bookDiv.appendChild(img);
        resultsContainer.appendChild(bookDiv);
    });
};

// Error handling
const handleError = (error) => {
    resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
};

// Dark mode toggle button event listener
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Pagination functionality to be implemented
// Additional features can be added based on requirements
