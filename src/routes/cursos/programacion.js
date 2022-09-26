const express = require("express");
const routerProgramacion = express.Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../../controllers/programacion");


routerProgramacion
  .get("/", getItems)
  .get("/:id", getItem )
  .post("/", createItem)
  .patch("/:id", updateItem)
  .delete("/:id", deleteItem);

module.exports = routerProgramacion;
