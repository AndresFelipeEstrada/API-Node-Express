const User = require("../database/users");
const { v4: uuid } = require("uuid");

const getUser = (userId) => {
  const getUser = User.searchUser(userId);
  return getUser;
};

const getAllUsers = () => {
  const AllUsers = User.getAllUsers();
  return AllUsers;
};

const postUser = (createNewUser) => {
  const insertarUser = {
    id: uuid(),
    ...createNewUser,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updateAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  const crearUsuario = User.createNewUser(insertarUser);

  return crearUsuario;
};

const patchUser = (id,changes) => {
  const updateUser = User.updateUser(id,changes)
  return updateUser;
};

const deleteUser = (id) => {
  User.deleteUser(id)
};

module.exports = { getUser, getAllUsers, postUser, patchUser, deleteUser };
