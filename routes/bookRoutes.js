const express = require("express");

const router = express.Router();

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 20,
    isbn: "1234567890",
    publishedDate: "2018-10-16",
  },
];


router.get("/books", (req, res) => {
  res.json(books);
});


router.post("/books", (req, res) => {

  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    isbn: req.body.isbn,
    publishedDate: req.body.publishedDate,
  };

  books.push(newBook);

  res.json({
    message: "Book Added Successfully",
    book: newBook,
  });
});


router.get("/books/:id", (req, res) => {

  const bookId = parseInt(req.params.id);

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.json({
      message: "Book Not Found",
    });
  }

  res.json(book);
});


router.put("/books/:id", (req, res) => {

  const bookId = parseInt(req.params.id);

  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.json({
      message: "Book Not Found",
    });
  }

  book.title = req.body.title || book.title;

  book.author = req.body.author || book.author;

  book.price = req.body.price || book.price;

  book.isbn = req.body.isbn || book.isbn;

  book.publishedDate =
    req.body.publishedDate || book.publishedDate;

  res.json({
    message: "Book Updated Successfully",
    book,
  });
});


router.delete("/books/:id", (req, res) => {

  const bookId = parseInt(req.params.id);

  const bookIndex = books.findIndex(
    (b) => b.id === bookId
  );

  if (bookIndex === -1) {
    return res.json({
      message: "Book Not Found",
    });
  }

  books.splice(bookIndex, 1);

  res.json({
    message: "Book Deleted Successfully",
  });
});

module.exports = router;