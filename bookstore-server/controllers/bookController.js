const { ObjectId } = require("mongodb");
const client = require("../config/mongodb");

async function uploadBook(req, res) {
  try {
    const data = req.body;
    const bookCollections = client.db("BookInventory").collection("books");
    const result = await bookCollections.insertOne(data);
    res.send(result);
  } catch (error) {
    console.error("Error uploading book:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function updateBook(req, res) {
  try {
    const id = req.params.id;
    const updateBookData = req.body;
    const bookCollections = client.db("BookInventory").collection("books");
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        ...updateBookData,
      },
    };

    const result = await bookCollections.updateOne(filter, updateDoc, options);
    res.send(result);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteBook(req, res) {
  try {
    const id = req.params.id;
    const bookCollections = client.db("BookInventory").collection("books");
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.deleteOne(filter);
    res.send(result);
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Internal Server Error");
  }
}

async function getAllBooks(req, res) {
  try {
    let query = {};
    const bookCollections = client.db("BookInventory").collection("books");

    if (req.query?.category) {
      query = { category: req.query.category };
    }

    const result = await bookCollections.find(query).toArray();
    res.send(result);
  } catch (error) {
    console.error("Error getting all books:", error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  uploadBook,
  updateBook,
  deleteBook,
  getAllBooks,
};
