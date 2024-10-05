const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "Book One", author: "Author One", description: "Description One", price: 10.99, image: "images/book1.jpg" },
  { id: 2, title: "Book Two", author: "Author Two", description: "Description Two", price: 12.99, image: "images/book2.jpg" },
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// POST new book
router.post("/", (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT update book
router.put("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;
  books = books.map((book) => (book.id === bookId ? { ...book, ...updatedBook } : book));
  res.json(updatedBook);
});

// DELETE book
router.delete("/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter((book) => book.id !== bookId);
  res.json({ message: "Book deleted" });
});

module.exports = router;
