const DB = require("./MOCK_DATA");
const { saveToDatabase } = require("./utils");

const getAllUsers = () => {
  return DB.users;
};

const createNewUser = (newUser) => {
  const yaEstaAgregado =
    DB.users.findIndex((user) => user.first_name === newUser.first_name) > -1;

  if (yaEstaAgregado) {
    return;
  }
  DB.users.push(newUser);
  saveToDatabase(DB);
  return newUser;
};

const searchUser = (userId) => {
  const user = DB.users.find((user) => user.id == userId);

  if (!user) {
    return;
  }
  return user;
};

const updateUser = (id, changes) => {
  const indexUser = DB.users.findIndex((user) => user.id == id);

  if (indexUser === -1) {
    return;
  }

  const updateUser = {
    ...DB.users[indexUser],
    ...changes,
    updateAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  DB.users[indexUser] = updateUser;
  saveToDatabase(DB);
  return updateUser;
};

const deleteUser = (id) => {
  const indexUser = DB.users.filter((user) => {
    user.id !== id;
  });

  if (indexUser === -1) {
    return;
  }
  DB.users.splice(indexUser, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllUsers,
  createNewUser,
  searchUser,
  updateUser,
  deleteUser,
};
