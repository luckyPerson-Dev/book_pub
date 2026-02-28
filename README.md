# Book Search Web App

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/luckyPerson-Dev/book_pub.git
   cd book_pub
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Features
- Search for books by title, author, or ISBN.
- View detailed information about each book.
- Save favorite books to your profile.

## Deployment Guide for Render.com
1. Create a new web service in Render and connect your GitHub repository.
2. Choose the branch to deploy (main by default).
3. Set the build command to `npm install` and the start command to `npm start`.
4. Configure the environment variables if needed.
5. Click on "Create Web Service" to start deploying.

## Usage Examples
- To search for a book by title:
   - Enter the book title in the search bar and click "Search."
- To view book details:
   - Click on a book from the search results to see more information.

## API Documentation
### Endpoint
- **GET /api/books**: Search for books based on query parameters (title, author, ISBN).

### Query Parameters
- `title`: (string) Title of the book.
- `author`: (string) Author of the book.
- `isbn`: (string) ISBN of the book to search.

### Response
- Returns a list of books matching the search criteria, including title, author, and ISBN.