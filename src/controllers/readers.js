const getReaders = (req, res) => {
    //get all readers
}
const getReader = (req, res) => {
    const {reader_id} = req.params;
res.status(200);
res.send(`reader with id: ${reader_id}`);
}
const createReader = (req, res) => {
    res.status(201);
    res.send(req.body);
}
const updateReader = (req, res) => {
    //get reader
}
const deleteReader = (req, res) => {
    //get reader
}

module.exports = {
    getReaders,
    getReader,
    createReader,
    updateReader,
    deleteReader
}