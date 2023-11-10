const Reader = require("../models/reader");

const getReaders = (req, res) => {
  Reader.find({})
    .then((reader) => {
      res.status(200).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const getReader = (req, res) => {
  const { reader_id } = req.params;
  Reader.findById(reader_id)
    .then((reader) => {
      res.status(200).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const createReader = (req, res) => {
  Reader.create({ ...req.body })
    .then((reader) => {
      res.status(201).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const updateReader = (req, res) => {
  const { reader_id } = req.params;
  const data = req.body;
  Reader.findByIdAndUpdate(reader_id, data, { new: true, runValidators: true })
    .then((reader) => {
      res.status(200).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const deleteReader = (req, res) => {
  const { reader_id } = req.params;
  Reader.findByIdAndDelete(reader_id)
    .then((reader) => {
      res.status(200).send("Done");
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const addBookToReader = (req, res) => {
  const { reader_id, book_id } = req.params;
  Reader.findByIdAndUpdate(reader_id, { $addToSet: { books: book_id } }, { new: true, runValidators: true })
    .then((reader) => {
      res.status(200).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const removeBookFromReader = (req, res) => {
  const { reader_id, book_id } = req.params;
  Reader.findByIdAndUpdate(reader_id, { $pullAll: { books: [{_id: book_id}] } }, { new: true, runValidators: true })
    .then((reader) => {
      res.status(200).send(reader);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getReaders,
  getReader,
  createReader,
  updateReader,
  deleteReader,
  addBookToReader,
  removeBookFromReader
};
