const express = require("express");
const {
  uploadBook,
  updateBook,
  deleteBook,
  getAllBooks,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/upload", uploadBook);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
router.get("/all", getAllBooks);

module.exports = router;
