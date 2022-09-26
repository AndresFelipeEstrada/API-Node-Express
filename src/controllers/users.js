const usersServices = require("../services/users");

const getUser = (req, res) => {
  const id  = Number(req.params.id);

  if (!id) {
    return;
  }

  const getUser = usersServices.getUser(id);
  res.send({ status: "OK", data: getUser });
};

const getAllUsers = (req, res) => {
  const AllUsers = usersServices.getAllUsers();
  res.send({ status: "OK", data: AllUsers });
};

const postUser = (req, res) => {
  const { body } = req;

  if (!body.first_name || !body.last_name || !body.email || !body.country) {
    return res.status(404).send("ERROR AL VALIDAR DATOS");
  }

  const newPostUser = {
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    country: body.country,
  };

  const postUser = usersServices.postUser(newPostUser);
  res.status(201).send({ status: "OK", data: postUser });
};

const patchUser = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  if (!id) {
    return;
  }

  const updateUser = usersServices.patchUser(id, body);
  res.send({ status: "OK", data: updateUser });
};

const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  console.log("🚀~ id", id)
  
  if (!id) {
    return;
  }

  usersServices.deleteUser(id)
  res.status(204).end()
};
module.exports = { getUser, getAllUsers, postUser, patchUser, deleteUser };
