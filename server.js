const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const booksRoute = require('./routes/books');  // Grouped with other requires

const app = express();
const PORT = 3000;

// Middleware to handle JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Books route
app.use('/books', booksRoute);

// Basic route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  // If you want to keep the console statement but disable the ESLint warning:
  /* eslint-disable no-console */
  console.log(`Server is running on http://localhost:${PORT}`);
  /* eslint-enable no-console */
});
