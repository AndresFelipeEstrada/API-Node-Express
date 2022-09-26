const programacionServices = require('../services/programacion')

const getItems = (req, res) => {
  const getItems = programacionServices.getItems
  res.send("HEY QUE TAL PROGRAMACION");
};

const getItem = (req, res) => {
  const getItem = programacionServices.getItem(req.params.id)
};

const createItem = (req, res) => {
  const createItem = programacionServices.createItem(req.params.id)
};

const updateItem = (req, res) => {
  const updateItem = programacionServices.updateItem(req.params.id)
};

const deleteItem = (req, res) => {
  programacionServices.deleteItem(req.params.id)
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
