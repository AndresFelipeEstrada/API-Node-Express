const express = require("express");
const routerProgramacion = require("./routes/cursos/programacion");
const routerMatematicas = require("./routes/cursos/matematicas");
const routerUsers = require("./routes/users/users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.get("/", (req, res) => res.send("HEY"));

app.use("/api/programacion", routerProgramacion);
app.use("/api/matematicas", routerMatematicas);
app.use("/api/users", routerUsers);

app.listen(PORT, () => {
  console.log(`Server escuchando en el puerto ${PORT}`);
});
