const express = require('express')
const routerUsers = express.Router()

const controllerUsers = require('../../controllers/users')

routerUsers
    .get('/:id',controllerUsers.getUser)
    .get('/',controllerUsers.getAllUsers)
    .post('/',controllerUsers.postUser)
    .patch('/:id',controllerUsers.patchUser)
    .delete('/:id',controllerUsers.deleteUser)

module.exports = routerUsers