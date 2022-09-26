const express = require("express");
const routerMatematicas = express.Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../../controllers/matematicas");

routerMatematicas
  .get("/", getItems )
  .get("/:id", getItem)
  .post("/", createItem)
  .patch("/:id", updateItem)
  .delete("/:id", deleteItem);

module.exports = routerMatematicas;
