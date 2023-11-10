const router = require("express").Router();

const {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
  addBookToReader,
  removeBookFromReader,
} = require("../controllers/readers");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

router.get("/readers", getReaders);
router.get("/readers/:reader_id", getReader);
router.post("/readers", createReader);
router.patch("/readers/:reader_id", updateReader);
router.delete("/readers/:reader_id", deleteReader);
router.post("/readers/:reader_id/books/:book_id", addBookToReader);
router.delete("/readers/:reader_id/books/:book_id", removeBookFromReader);
router.get("/books", getBooks);
router.get("/books/:book_id", getBook);
router.post("/books", createBook);
router.patch("/books/:book_id", updateBook);
router.delete("/books/:book_id", deleteBook);

module.exports = router;
