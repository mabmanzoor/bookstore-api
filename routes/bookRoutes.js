const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.get("/books", async (req, res) => {

  try {

    const books = await Book.find();

    res.json(books);

  } catch (error) {

    res.json({
      message: error.message,
    });

  }
});

router.post("/books", async (req, res) => {

  try {

    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      isbn: req.body.isbn,
      publishedDate: req.body.publishedDate,
    });

    await newBook.save();

    res.json({
      message: "Book Added Successfully",
      book: newBook,
    });

  } catch (error) {

    res.json({
      message: error.message,
    });

  }
});

router.get("/books/:id", async (req, res) => {

  try {

    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.json({
        message: "Book Not Found",
      });
    }

    res.json(book);

  } catch (error) {

    res.json({
      message: error.message,
    });

  }
});

router.put("/books/:id", async (req, res) => {

  try {

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedBook) {
      return res.json({
        message: "Book Not Found",
      });
    }

    res.json({
      message: "Book Updated Successfully",
      book: updatedBook,
    });

  } catch (error) {

    res.json({
      message: error.message,
    });

  }
});

router.delete("/books/:id", async (req, res) => {

  try {

    const deletedBook = await Book.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBook) {
      return res.json({
        message: "Book Not Found",
      });
    }

    res.json({
      message: "Book Deleted Successfully",
    });

  } catch (error) {

    res.json({
      message: error.message,
    });

  }
});

module.exports = router;